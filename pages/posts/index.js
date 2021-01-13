import { useState } from "react";
import { NextSeo } from "next-seo";

import Container from "@/components/Container";
import BlogPost from "@/components/BlogPost";
import { Search as SearchIcon } from "react-feather";
import { getAllFilesFrontMatter } from "@/lib/mdx";

import config from "@/data/config";

const url = config.baseUrl + "/blog";
const title = "Blog – " + config.name;
const description = config.description;

export default function Blog({ posts }) {
  const [searchValue, setSearchValue] = useState("");
  const filteredBlogPosts = posts
    .sort((a, b) => {
      return Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt));
    })
    .filter((frontMatter) => {
      return (
        frontMatter.title.toLowerCase().includes(searchValue.toLowerCase()) &&
        !frontMatter.unlisted
      );
    });

  return (
    <Container>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description
        }}
      />
      <div className="flex flex-col justify-center items-start w-full max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-8 text-black dark:text-white">
          Blog
        </h1>
        <div className="relative w-full mb-4">
          <input
            aria-label={`Search through ${filteredBlogPosts.length} articles`}
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder={`Search through ${filteredBlogPosts.length} articles`}
            className="px-4 py-2 border border-gray-300 dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          />
          <SearchIcon className="absolute right-3 top-3 h-4 w-4 text-gray-400 dark:text-gray-300" />
        </div>
        {!filteredBlogPosts.length && (
          <p className="my-8 self-center text-gray-600 dark:text-gray-400 mb-4">
            No posts found ;-;
          </p>
        )}
        <div className="divide-y divide-gray-200 dark:divide-gray-900">
          {filteredBlogPosts.map((frontMatter) => (
            <BlogPost key={frontMatter.title} {...frontMatter} />
          ))}
        </div>
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("posts");

  return { props: { posts } };
}
