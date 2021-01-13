import Link from "next/link";
import { NextSeo } from "next-seo";

import Container from "@/components/Container";

import config from "@/data/config";

export default function NotFound() {
  return (
    <Container>
      <NextSeo
        title={"404 – " + config.name}
        canonical={config.baseUrl + "/404"}
        openGraph={{
          url: config.baseUrl + "/404",
          title: "404 – " + config.name
        }}
      />
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          404 – Not Found
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          It seems you've found something that used to exist, or you spelled
          something wrong. Can you double check that URL?
        </p>
        <Link href="/">
          <a className="p-1 sm:p-4 w-64 font-bold mx-auto text-center rounded-md bg-gray-100 dark:bg-gray-900 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800">
            Return Home
          </a>
        </Link>
      </div>
    </Container>
  );
}
