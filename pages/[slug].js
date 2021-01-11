import hydrate from 'next-mdx-remote/hydrate';

import { getFiles, getFileBySlug } from '@/lib/mdx';
import UsesLayout from '@/layouts/uses';
import MDXComponents from '@/components/MDXComponents';

export default function Page({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {
    components: MDXComponents
  });

  return <UsesLayout frontMatter={frontMatter}>{content}</UsesLayout>;
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
