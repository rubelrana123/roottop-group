#!/usr/bin/env node
/**
 * Submit URLs to IndexNow (Bing, Yandex, Seznam, Naver all share submissions).
 *
 *   npm run indexnow                      # every URL in the LIVE sitemap.xml
 *   npm run indexnow -- /services /about-us   # only these paths
 *
 * Run it AFTER a deploy is live: the search engine fetches the key file from
 * the live site to verify the submission. Reads INDEXNOW_KEY from .env.
 */

const SITE_URL = 'https://www.roottopgroup.com';
const KEY_LOCATION = `${SITE_URL}/indexnow-key.txt`;
const ENDPOINT = 'https://api.indexnow.org/indexnow';

try {
  process.loadEnvFile('.env');
} catch {
  // No .env file: rely on the shell environment instead.
}

const key = process.env.INDEXNOW_KEY;
if (!key || !/^[a-zA-Z0-9-]{8,128}$/.test(key)) {
  console.error('INDEXNOW_KEY is missing or invalid (8-128 letters, digits or dashes).');
  process.exit(1);
}

async function sitemapUrls() {
  const res = await fetch(`${SITE_URL}/sitemap.xml`);
  if (!res.ok) throw new Error(`Could not fetch sitemap.xml (HTTP ${res.status})`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((match) => match[1]);
}

const args = process.argv.slice(2);
const urls = args.length
  ? args.map((path) => new URL(path, SITE_URL).href)
  : await sitemapUrls();

const host = new URL(SITE_URL).host;
const foreign = urls.filter((url) => new URL(url).host !== host);
if (foreign.length) {
  console.error(`These URLs are not on ${host} and would be rejected:\n${foreign.join('\n')}`);
  process.exit(1);
}

// Check the key file is live first; otherwise the engine answers 403.
const keyRes = await fetch(KEY_LOCATION);
const liveKey = keyRes.ok ? (await keyRes.text()).trim() : '';
if (liveKey !== key) {
  console.error(
    `${KEY_LOCATION} does not return the key from .env (HTTP ${keyRes.status}).\n` +
      'Deploy the site and set INDEXNOW_KEY on the server first.',
  );
  process.exit(1);
}

// IndexNow accepts up to 10,000 URLs per request.
for (let i = 0; i < urls.length; i += 10_000) {
  const urlList = urls.slice(i, i + 10_000);
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host, key, keyLocation: KEY_LOCATION, urlList }),
  });

  const meaning = {
    200: 'OK, URLs submitted',
    202: 'Accepted, key validation pending',
    400: 'Bad request',
    403: 'Key not valid (key file missing or different)',
    422: 'URLs do not belong to the host or key mismatch',
    429: 'Too many requests, try again later',
  }[res.status] ?? 'Unexpected response';

  console.log(`IndexNow: HTTP ${res.status} ${meaning} (${urlList.length} URLs)`);
  if (res.status >= 400) {
    console.error(await res.text());
    process.exit(1);
  }
}

urls.forEach((url) => console.log(`  ${url}`));
