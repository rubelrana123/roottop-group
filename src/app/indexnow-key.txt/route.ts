/**
 * IndexNow key file. Search engines fetch this to confirm we own the site
 * before accepting URL submissions. Each submission passes this URL as
 * `keyLocation`, so the file doesn't need to be named after the key.
 *
 * Read at request time (route handlers are dynamic by default), so changing
 * INDEXNOW_KEY on the server takes effect without a rebuild.
 */
export function GET() {
  const key = process.env.INDEXNOW_KEY;

  if (!key) {
    return new Response('Not Found', { status: 404 });
  }

  return new Response(key, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
