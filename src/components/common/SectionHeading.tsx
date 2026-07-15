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
        "mb-16",
        isCenter ? "text-center" : "text-left",
        className
      )}
    >
      {/* Subtitle */}
      {subtitle && (
        <p
          className={clsx(
            "mb-2 text-sm font-medium uppercase tracking-[6px] text-gray-500",
            isCenter && "text-center"
          )}
        >
          {subtitle}
        </p>
      )}

      {/* Badge */}
      <span  className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
        {badge}
      </span>

      {/* Title */}
      <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-5xl">
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p
          className={clsx(
            "mt-4 text-lg leading-8 text-gray-700",
            isCenter ? "mx-auto max-w-3xl" : "max-w-3xl"
          )}
        >
          {description}
        </p>
      )}

      {/* Underline */}
      <div
        className={clsx(
          "bg-primary mt-6 h-1 w-24 rounded-full",
          isCenter && "mx-auto"
        )}
      />
    </div>
  );
}