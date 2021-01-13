import { parseISO, format } from "date-fns";

import Container from "@/components/Container";
import BlogSeo from "@/components/BlogSeo";
import { ExternalLink } from "react-feather";
import config from "@/data/config";

const editUrl = (slug) => {
  return `https://github.com/${config.repo.name}/edit/${config.repo.branch}/data/posts/${slug}.mdx`;
};
const discussUrl = (slug) => {
  let query = encodeURIComponent(`${config.baseUrl}/posts/${slug}`);
  return `https://mobile.twitter.com/search?q=${query}`;
};

export default function PostLayout({ children, frontMatter }) {
  return (
    <Container>
      <BlogSeo
        url={`${config.baseUrl}/posts/${frontMatter.slug}`}
        {...frontMatter}
      />
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          {frontMatter.title}
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2 mb-8">
          <div className="flex items-center">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {format(parseISO(frontMatter.publishedAt), "MMMM dd, yyyy")}
            </p>
          </div>
          <p className="text-sm text-gray-500 min-w-32 mt-2 md:mt-0">
            {frontMatter.readingTime.text}
          </p>
        </div>
        <div className="prose dark:prose-dark max-w-none w-full">
          {children}
        </div>
        <div className="flex space-x-3 text-sm text-gray-700 dark:text-gray-300 hover:text-gray-800 hover:dark:text-gray-200 mt-8">
          <a
            href={discussUrl(frontMatter.slug)}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {"Discuss on Twitter"}
            <ExternalLink
              size={16}
              className="inline-block ml-1 text-gray-500"
            />
          </a>
          <p> • </p>
          <a
            href={editUrl(frontMatter.slug)}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {"Edit on GitHub"}
            <ExternalLink
              size={16}
              className="inline-block ml-1 text-gray-500"
            />
          </a>
        </div>
      </article>
    </Container>
  );
}
