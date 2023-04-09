import Form from "@/components/Form";
import { KeyIcon } from "@heroicons/react/24/outline";
import React from "react";

function ExtractPage() {
  return (
    <section className="bg-white dark:bg-gray-900 w-full h-screen flex flex-col items-center justify-center">
      <div className="py-8 px-4 mx-auto max-w-screen-lg text-center lg:py-16 lg:px-12">
        <div className="flex flex-col items-center border-b-2 border-gray-300 dark:border-gray-800 mb-4 pb-2">
          <KeyIcon className="w-16 h-16 text-cyan-500 mb-5" />
          <p className="font-normal text-gray-500 text-lg sm:px-8 xl:px-20 dark:text-gray-400">
            Extract Essential Keywords from Your Text with Our AI Model on
            Mindsdb! Boost Your SEO Effortlessly.{" "}
            <b>Note: High demand may cause occasional delays.</b>
          </p>
        </div>
        <Form />
      </div>
    </section>
  );
}

export default ExtractPage;
