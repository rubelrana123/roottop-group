import Link from "next/link";
import JsonLd from "@/components/common/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";

type BreadcrumbItem = {
  name: string;
  href: string;
};

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <>
      <nav aria-label="Breadcrumb" className="bg-white">
        <ol className="container mx-auto flex flex-wrap items-center gap-2 px-5 py-4 text-sm text-slate-600">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={item.href} className="flex items-center gap-2">
                {index > 0 && <span aria-hidden="true">/</span>}
                {isLast ? (
                  <span aria-current="page" className="font-medium text-slate-900">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="transition hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd data={breadcrumbJsonLd(items)} />
    </>
  );
}
