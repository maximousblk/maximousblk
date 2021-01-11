import Link from "next/link";
import Image from "next/image";
import Tweet from "react-tweet-embed";
import { ExternalLink } from "react-feather";

import ProsCard from "@/components/ProsCard";
import ConsCard from "@/components/ConsCard";
import Step from "@/components/Step";

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink =
    href && (href.startsWith("/") || href.startsWith("./"));
  const isHeaderLink = href && href.startsWith("#");

  if (isHeaderLink) {
    return <a {...props} />;
  }

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props} />
      </Link>
    );
  }

  return (
    <a target="_blank" rel="noopener noreferrer" {...props}>
      {props.children}
      {typeof props.children == "string" && (
        <ExternalLink size={16} className="inline-block ml-1 text-gray-500" />
      )}
    </a>
  );
};

const MDXComponents = {
  Image,
  a: CustomLink,
  ConsCard,
  ProsCard,
  Step,
  Tweet
};

export default MDXComponents;
