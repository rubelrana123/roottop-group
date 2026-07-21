import clsx from "clsx";

interface SectionHeadingProps {
  subtitle?: string;
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  subtitle,
  badge,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={clsx(
        "mb-14 max-w-3xl",
        isCenter ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {/* Subtitle */}
      {subtitle && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 md:text-sm">
          {subtitle}
        </p>
      )}

      {/* Badge */}
      {badge && (
        <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary md:text-sm">
          {badge}
        </span>
      )}

      {/* Title */}
      <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p
          className={clsx(
            "mt-5 text-base leading-7 text-slate-600 md:text-lg md:leading-8",
            isCenter ? "mx-auto" : ""
          )}
        >
          {description}
        </p>
      )}

      {/* Accent Line */}
      <div
        className={clsx(
          "mt-7 h-1 w-20 rounded-full bg-primary",
          isCenter && "mx-auto"
        )}
      />
    </div>
  );
}