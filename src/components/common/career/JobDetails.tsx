 
import Image from "next/image";
import Link from "next/link";
import type { Career } from "@/lib/data";
import {
  Briefcase, Wallet, Calendar, MapPin, UserRound,
  Building2, CircleCheck, ExternalLink, Mail, Phone, Globe
} from "lucide-react";

type Props = { job: Career };

export default function JobDetails({ job }: Props) {
  return (
    <section className="bg-slate-50 py-20">
      <div className="container mx-auto px-5">
        <div className="grid gap-10 lg:grid-cols-[2fr_380px]">
          <div className="space-y-8">
            <div className="rounded-2xl border bg-white p-8 shadow-sm">
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-4xl font-bold">{job.title}</h1>
                {job.featured && (
                  <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-600">
                    Featured
                  </span>
                )}
              </div>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {job.company && (
                  <Info icon={<Building2 size={20}/>} label="Company" value={job.company}/>
                )}
                <Info icon={<Briefcase size={20}/>} label="Employment Status" value={job.summary.employmentStatus}/>
                <Info icon={<Wallet size={20}/>} label="Salary" value={job.summary.salary}/>
                <Info icon={<Calendar size={20}/>} label="Deadline" value={job.summary.deadline}/>
                <Info icon={<MapPin size={20}/>} label="Location" value={job.summary.location}/>
                <Info icon={<UserRound size={20}/>} label="Experience" value={job.summary.experience}/>
                <Info icon={<Building2 size={20}/>} label="Workplace" value={job.summary.workplace}/>
              </div>
            </div>

            <Section title="Job Overview">
              <p className="leading-8 text-gray-600">{job.jobContext}</p>
            </Section>

            <ListSection title="Job Responsibilities" items={job.responsibilities}/>
            <ListSection title="Educational Requirements" items={job.educationalRequirements}/>
            <ListSection title="Experience Requirements" items={job.experienceRequirements}/>
            <ListSection title="Additional Requirements" items={job.additionalRequirements}/>
            <ListSection title="Compensation & Benefits" items={job.compensationBenefits}/>

            {job.officeAddress && (
              <Section title="How to Apply & Contact Information">
                <p className="mb-6 leading-8 text-gray-600">
                  For any recruitment-related queries, candidates may contact us using the details below.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <Info icon={<Building2 size={20}/>} label="Company" value={job.officeAddress.company}/>
                  <Info icon={<Mail size={20}/>} label="Email" value={job.officeAddress.email}/>
                  <Info icon={<Phone size={20}/>} label="Phone" value={job.officeAddress.phone}/>
                  <Info icon={<Globe size={20}/>} label="Website" value={job.officeAddress.website}/>
                  <div className="md:col-span-2">
                    <Info icon={<MapPin size={20}/>} label="Address" value={job.officeAddress.address}/>
                  </div>
                  <div className="md:col-span-2">
                    <Info icon={<Calendar size={20}/>} label="Application Deadline" value={job.summary.deadline}/>
                  </div>
                </div>
              </Section>
            )}
          </div>

          <aside className="lg:sticky lg:top-28 h-fit">
            <div className="overflow-hidden rounded-2xl border bg-white shadow-lg">
              <Image src={job?.image} alt="Career" width={600} height={240} className="h-52 w-full object-cover"/>
              <div className="space-y-5 p-7">
                <h3 className="text-2xl font-bold">Apply for this Position</h3>
                <Summary title="Vacancy" value={String(job.summary.vacancy)}/>
                <Summary title="Job Level" value={job.summary.jobLevel}/>
                <Summary title="Age" value={job.summary.age}/>
                <Summary title="Deadline" value={job.summary.deadline}/>
                <Link href={job.application.applyLink} target="_blank" className="flex items-center justify-center gap-2 rounded-lg bg-green-600 px-6 py-4 text-white font-semibold">
                  Apply Now <ExternalLink size={18}/>
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Info({icon,label,value}:{icon:React.ReactNode;label:string;value:string|number;}){
  return <div className="flex gap-4 rounded-xl bg-slate-50 p-5"><div>{icon}</div><div><p className="text-sm text-gray-500">{label}</p><p className="font-semibold">{value}</p></div></div>;
}
function Section({title,children}:{title:string;children:React.ReactNode;}){
  return <div className="rounded-2xl border bg-white p-8 shadow-sm"><h2 className="mb-6 text-2xl font-bold">{title}</h2>{children}</div>;
}
function ListSection({title,items}:{title:string;items:string[];}){
  return <Section title={title}><ul className="space-y-3">{items.map(i=><li key={i} className="flex gap-3"><CircleCheck size={18} className="mt-1 text-green-600"/><span>{i}</span></li>)}</ul></Section>;
}
function Summary({title,value}:{title:string;value:string;}){
  return <div className="flex justify-between border-b pb-3"><span>{title}</span><span className="font-semibold">{value}</span></div>;
}
