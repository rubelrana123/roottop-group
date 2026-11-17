import Image from 'next/image';

// Lightweight server-rendered loader: CSS-only animation (no framer-motion) and
// the small 68 KB transparent logo instead of the full-size one.
const dots = ['#39FF14', '#FF7A00', '#39FF14', '#FF7A00'];

export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-0 z-[40] flex items-center justify-center bg-white"
    >
      <div className="flex flex-col items-center">
        <Image
          src="/roottopgroup_transparent.png"
          alt="RootTOP Group"
          width={220}
          height={100}
          className="h-auto w-[220px] animate-pulse object-contain"
        />

        <div className="mt-4 flex items-center gap-2" aria-hidden="true">
          {dots.map((color, index) => (
            <span
              key={index}
              className="h-3 w-3 animate-bounce rounded-full motion-reduce:animate-none"
              style={{ backgroundColor: color, animationDelay: `${index * 150}ms` }}
            />
          ))}
        </div>

        <span className="sr-only">Loading…</span>
      </div>
    </div>
  );
}
