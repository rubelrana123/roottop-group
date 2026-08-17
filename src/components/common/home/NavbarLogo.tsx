import Image from 'next/image';
import Link from 'next/link';

export default function NavbarLogo() {
  return (
    <Link
      href="/"
      aria-label="RootTOP Group home"
      className="shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      <Image
        src="/rootopgrouptm-transparent.png"
        alt="RootTOP Group"
        width={1962}
        height={802}
        priority
        fetchPriority="high"
        className="h-auto w-[110px] sm:w-[125px] lg:w-[140px]"
      />
    </Link>
  );
}
