import hydrate from 'next-mdx-remote/hydrate';

import { getFileBySlug } from '@/lib/mdx';
import IndexLayout from '@/layouts/index';
import MDXComponents from '@/components/MDXComponents';

export default function Uses({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {
    components: MDXComponents
  });

  return <IndexLayout frontMatter={frontMatter}>{content}</IndexLayout>;
}

export async function getStaticProps() {
  const index = await getFileBySlug('pages/home');

  return { props: index };
}