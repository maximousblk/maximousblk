import hydrate from 'next-mdx-remote/hydrate';

import { getFiles, getFileBySlug } from '@/lib/mdx';
import PageLayout from '@/layouts/page';
import MDXComponents from '@/components/MDXComponents';

export default function Page({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {
    components: MDXComponents
  });

  return <PageLayout frontMatter={frontMatter}>{content}</PageLayout>;
}

export async function getStaticPaths() {
  const snippets = await getFiles('pages');

  return {
    paths: snippets.map((s) => ({
      params: {
        slug: s.replace(/\.mdx/, '')
      }
    })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const snippet = await getFileBySlug('pages', params.slug);

  return { props: snippet };
}
