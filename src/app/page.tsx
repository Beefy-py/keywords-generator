import { ArrowLongRightIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Home() {
  return (
    <section className="bg-white dark:bg-gray-900 w-full h-screen flex flex-col items-center justify-center">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <div className="flex flex-col items-center">
          <Cog6ToothIcon className="w-16 h-16 text-cyan-500 hover:animate-spin" />
          <h1 className="my-6 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl dark:text-white">
            Maximize SEO with AI-Powered Keyword Extractor
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Extract keywords effortlessly with our AI-powered model on Mindsdb.
            Our tool helps you pinpoint important parts of your text, making it
            easier to utilize and improve your website&apos;s SEO. Input your
            text, let our model analyze it, and save time while driving more
            traffic to your site!
          </p>
        </div>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <Link
            href="/extract"
            className="transition group inline-flex outline-none justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-cyan-500 hover:bg-cyan-500 focus:ring-2 focus:ring-cyan-300 dark:focus:ring-cyan-700"
          >
            <span>Try it!</span>
            <ArrowLongRightIcon className="ml-2 w-6 h-6 group-hover:translate-x-1 transition" />
          </Link>
        </div>
      </div>
    </section>
  );
}
