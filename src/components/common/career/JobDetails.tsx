import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Career } from "@/lib/data";
import { ArrowLeft, Briefcase, Building2, Calendar, CircleCheck, ExternalLink, Globe, Mail, MapPin, Phone, UserRound, Wallet } from "lucide-react";

type Props = { job: Career };

export default function JobDetails({ job }: Props) {
  return (
    <section className="bg-slate-50 py-10 sm:py-14 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link href="/career" className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 sm:mb-8">
          <ArrowLeft size={17} aria-hidden="true" /> Back to all openings
        </Link>

        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-8 xl:grid-cols-[minmax(0,1fr)_400px] xl:gap-10">
          <main className="min-w-0 space-y-5 sm:space-y-6 lg:space-y-8">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7 lg:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="min-w-0 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">{job.title}</h1>
                {job.featured && <span className="shrink-0 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-700 ring-1 ring-inset ring-emerald-200">Hiring now</span>}
              </div>
              <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4">
                {job.company && <Info icon={<Building2 />} label="Company" value={job.company} />}
                <Info icon={<Briefcase />} label="Employment status" value={job.summary.employmentStatus} />
                <Info icon={<Wallet />} label="Salary" value={job.summary.salary} />
                <Info icon={<Calendar />} label="Deadline" value={job.summary.deadline} />
                <Info icon={<MapPin />} label="Location" value={job.summary.location} />
                <Info icon={<UserRound />} label="Experience" value={job.summary.experience} />
                <Info icon={<Building2 />} label="Workplace" value={job.summary.workplace} />
              </div>
            </div>

            <div className="lg:hidden"><ApplicationCard job={job} /></div>

            <Section title="Job overview"><p className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">{job.jobContext}</p></Section>
            <ListSection title={job.sectionLabels?.responsibilities || "Job responsibilities"} items={job.responsibilities} />
            <ListSection title={job.sectionLabels?.education || "Educational requirements"} items={job.educationalRequirements} />
            <ListSection title={job.sectionLabels?.experience || "Experience requirements"} items={job.experienceRequirements} />
            <ListSection title={job.sectionLabels?.additional || "Additional requirements"} items={job.additionalRequirements} />
            <ListSection title={job.sectionLabels?.compensation || "Compensation & benefits"} items={job.compensationBenefits} />

            {job.officeAddress && (
              <Section title="Contact information">
                <p className="mb-5 text-sm leading-7 text-slate-600 sm:mb-6 sm:text-base">For recruitment-related questions, contact us using the details below.</p>
                <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                  <Info icon={<Building2 />} label="Company" value={job.officeAddress.company} />
                  <Info icon={<Mail />} label="Email" value={job.officeAddress.email} href={`mailto:${job.officeAddress.email}`} />
                  <Info icon={<Phone />} label="Phone" value={job.officeAddress.phone} href={`tel:${job.officeAddress.phone.replace(/[^+\d]/g, "")}`} />
                  <Info icon={<Globe />} label="Website" value={job.officeAddress.website.replace(/^https?:\/\//, "")} href={job.officeAddress.website} external />
                  <div className="sm:col-span-2"><Info icon={<MapPin />} label="Address" value={job.officeAddress.address} /></div>
                </div>
              </Section>
            )}
          </main>

          <aside className="sticky top-24 hidden h-fit lg:block" aria-label="Application summary"><ApplicationCard job={job} /></aside>
        </div>
      </div>
    </section>
  );
}

function ApplicationCard({ job }: { job: Career }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-200/60">
      <div className="relative h-40 sm:h-52 lg:h-48">
        <Image src={job.image || "/career-banner.webp"} alt={`${job.title} career opportunity`} fill sizes="(max-width: 1023px) 100vw, 400px" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 to-transparent" aria-hidden="true" />
      </div>
      <div className="p-5 sm:p-7">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Join our team</p>
        <h2 className="mt-2 text-xl font-bold text-slate-900 sm:text-2xl">Apply for this position</h2>
        <div className="mt-5 space-y-3">
          <Summary title="Vacancy" value={String(job.summary.vacancy)} />
          <Summary title="Job level" value={job.summary.jobLevel} />
          <Summary title="Age" value={job.summary.age} />
          <Summary title="Deadline" value={job.summary.deadline} />
        </div>
        <Link href={job.application.applyLink} target="_blank" rel="noopener noreferrer" className="mt-6 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-center font-semibold text-white shadow-sm transition hover:brightness-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
          Apply now <ExternalLink size={18} aria-hidden="true" />
        </Link>
        <p className="mt-3 text-center text-xs leading-5 text-slate-500">Opens the application form in a new tab.</p>
      </div>
    </div>
  );
}

function Info({ icon, label, value, href, external = false }: { icon: ReactNode; label: string; value: string | number; href?: string; external?: boolean }) {
  const content = <><div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-white text-primary shadow-sm [&>svg]:size-[18px]" aria-hidden="true">{icon}</div><div className="min-w-0"><p className="text-xs font-medium uppercase tracking-wide text-slate-500">{label}</p><p className="mt-1 break-words text-sm font-semibold leading-5 text-slate-800 sm:text-base">{value}</p></div></>;
  const className = "flex min-w-0 gap-3 rounded-xl bg-slate-50 p-4 sm:gap-4 sm:p-5";
  if (href) return <Link href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className={`${className} transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary`}>{content}</Link>;
  return <div className={className}>{content}</div>;
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7 lg:p-8"><h2 className="mb-5 text-xl font-bold capitalize tracking-tight text-slate-900 sm:mb-6 sm:text-2xl">{title}</h2>{children}</section>;
}

function ListSection({ title, items }: { title: string; items: string[] }) {
  return <Section title={title}><ul className="space-y-3.5">{items.map((item) => <li key={item} className="flex min-w-0 gap-3 text-sm leading-6 text-slate-700 sm:text-base sm:leading-7"><CircleCheck size={19} className="mt-0.5 shrink-0 text-emerald-600 sm:mt-1" aria-hidden="true" /><span className="min-w-0 break-words">{item}</span></li>)}</ul></Section>;
}

function Summary({ title, value }: { title: string; value: string }) {
  return <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-3 text-sm last:border-0 last:pb-0 sm:text-base"><span className="shrink-0 text-slate-500">{title}</span><span className="min-w-0 break-words text-right font-semibold text-slate-800">{value}</span></div>;
}
