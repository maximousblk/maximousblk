import Link from "next/link";

import Icon from "@/components/FeatherIcons";

import config from "@/data/config";

const Social = ({ name, icon, href }) => {
  return (
    <a
      className="p-2 rounded text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-400 transition hover:bg-gray-100 dark:hover:bg-gray-900"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{name}</span>
      <Icon name={icon} size={20} />
    </a>
  );
};

export default function Footer() {
  return (
    <footer className="flex flex-col items-center mb-8">
      <div className="flex space-x-2 mb-4">
        {config.footer.social.map(({ name, icon, href }) => (
          <Social name={name} icon={icon} href={href} key={name} />
        ))}
      </div>
      <div className="space-x-3">
        {config.footer.links.map(({ name, href }) => (
          <Link href={href} key={name}>
            <a className="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-400">/{name}</a>
          </Link>
        ))}
      </div>
    </footer>
  );
}
