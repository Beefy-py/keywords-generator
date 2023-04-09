"use client";

import { DocumentDuplicateIcon } from "@heroicons/react/24/solid";
import React, { useState, useEffect } from "react";

const ResponseSnippet = ({ res }: { res: string }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  }, [copied]);

  return (
    <div className="mt-4 first:mt-0 text-left p-4 dark:text-gray-400 text-gray-500 relative bg-gray-200 dark:bg-gray-800 rounded-lg">
      <code>{res}</code>
      <button
        onClick={() => {
          navigator.clipboard
            .writeText(res)
            .then(() => setCopied(true))
            .catch((err) => console.error("Could not copy"));
        }}
        className="z-10 absolute -right-2 -top-2 hover:text-cyan-500 transition"
      >
        <DocumentDuplicateIcon className="w-5 h-5" />
      </button>
      <div
        className={`absolute flex items-center justify-center rounded-lg top-0 right-0 bottom-0 left-0 bg-black/60 backdrop-blur-[0.8px] ${
          !copied ? "scale-0" : "scale-100"
        } transition ease-out`}
      >
        <p className="text-lg tracking-[0.3rem] text-cyan-500 font-semibold ">
          copied
        </p>
      </div>
    </div>
  );
};

export default ResponseSnippet;
