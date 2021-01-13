import Link from "next/link";

export default function FunctionCard({
  title,
  description,
  slug,
  ...rest
}) {
  return (
    <Link href={`/snippets/${slug}`}>
      <a
        className="border border-grey-200 dark:border-gray-900 rounded p-4 w-full"
        {...rest}
      >
        <h3 className="text-lg font-bold text-left mt-2 text-gray-900 dark:text-gray-100">
          {title}
        </h3>
        <p className="mt-1 text-gray-700 dark:text-gray-400">{description}</p>
      </a>
    </Link>
  );
}
