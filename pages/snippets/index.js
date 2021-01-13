import { useState } from "react";
import { NextSeo } from "next-seo";
import { Search as SearchIcon } from "react-feather";

import Container from "@/components/Container";
import FunctionCard from "@/components/FunctionCard";
import { getAllFilesFrontMatter } from "@/lib/mdx";

import config from "@/data/config";

const url = config.baseUrl + "/snippets";
const title = "Code Snippets – " + config.name;

export default function Snippets({ snippets }) {
  const [searchValue, setSearchValue] = useState("");
  const filteredSnippets = snippets.sort().filter((frontMatter) => {
    return (
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase()) &&
      !frontMatter.unlisted
    );
  });

  return (
    <Container>
      <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          url,
          title
        }}
      />
      <div className="flex flex-col justify-center items-start w-full max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Code Snippets
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          These are a collection of code snippets I've used in the past and
          saved.
        </p>
        <div className="relative w-full mb-4">
          <input
            aria-label={`Search through ${filteredSnippets.length} snippets`}
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder={`Search through ${filteredSnippets.length} snippets`}
            className="px-4 py-2 border border-gray-300 dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          />
          <SearchIcon className="absolute right-3 top-3 h-4 w-4 text-gray-400 dark:text-gray-300" />
        </div>
        {!filteredSnippets.length && (
          <p className="my-8 self-center text-gray-600 dark:text-gray-400 mb-4">
            No snippets found ;-;
          </p>
        )}
        <div className="grid gap-4 grid-cols-1 my-2 w-full mt-4">
          {filteredSnippets.map((snippet) => (
            <FunctionCard
              key={snippet.slug}
              title={snippet.title}
              slug={snippet.slug}
              description={snippet.description}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const snippets = await getAllFilesFrontMatter("snippets");

  return { props: { snippets } };
}
