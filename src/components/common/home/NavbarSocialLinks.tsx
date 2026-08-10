import { CiYoutube } from 'react-icons/ci';
import { FaFacebook, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

const socialLinks = [
  {
    href: 'https://x.com',
    label: 'Visit our X (Twitter) page',
    title: 'X (Twitter)',
    icon: <FaXTwitter size={17} aria-hidden="true" />,
  },
  {
    href: 'https://youtube.com',
    label: 'Visit our YouTube channel',
    title: 'YouTube',
    icon: <CiYoutube size={19} aria-hidden="true" />,
  },
  {
    href: 'https://facebook.com',
    label: 'Visit our Facebook page',
    title: 'Facebook',
    icon: <FaFacebook size={17} aria-hidden="true" />,
  },
  {
    href: 'https://linkedin.com',
    label: 'Visit our LinkedIn page',
    title: 'LinkedIn',
    icon: <FaLinkedin size={17} aria-hidden="true" />,
  },
];

export default function NavbarSocialLinks() {
  return (
    <div className="hidden items-center gap-2 xl:flex">
      {socialLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          title={link.title}
          className="rounded border border-gray-200 p-2 text-slate-700 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}
