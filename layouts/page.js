import { NextSeo } from "next-seo";

import Container from "@/components/Container";

import config from "@/data/config";

export default function PageLayout({ children, frontMatter }) {
  const title = `${frontMatter.title} - ${config.name}`;
  const url = `${config.baseUrl}/${frontMatter.slug}`;
  const description = frontMatter.summary;

  return (
    <Container>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{ url, title, description }}
      />
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          {frontMatter.title}
        </h1>
        {!frontMatter.hide_summary && (
          <p className="text-gray-700 dark:text-gray-300 mt-2 mb-8">
            {description}
          </p>
        )}
        <div className="prose dark:prose-dark w-full">{children}</div>
      </article>
    </Container>
  );
}
