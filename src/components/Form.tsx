"use client";

import {
  ExclamationCircleIcon,
  InboxArrowDownIcon,
} from "@heroicons/react/24/outline";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import ResponseSnippet from "./ResponseSnippet";

type Inputs = {
  text: string;
};

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const [responses, setResponses] = useState<Array<string>>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    setErrorMessage("");
    setResponses([]);

    try {
      const response = await fetch("/api/extract", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response) {
        setLoading(false);
      }

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const responseData = await response.json();
      const twoStringResponses = responseData.response.split("\n");
      console.log(twoStringResponses);
      setResponses([twoStringResponses[0], twoStringResponses[2]]);
    } catch (error) {
      setLoading(false);
      console.log(error);
      setErrorMessage(
        "There was an error, Please try again after a few seconds."
      );
    }
  };
  return (
    <section className="grid md:grid-cols-2 divide-y-2 md:divide-y-0 md:divide-x-2 divide-gray-300 dark:divide-gray-800 space-y-4 md:space-y-0 md:space-x-4">
      <div className="left">
        <h3 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Your Text
        </h3>
        <form onSubmit={handleSubmit(onSubmit)} className="text-left">
          <div className="mb-3">
            <textarea
              {...register("text", { required: true })}
              id="text"
              rows={7}
              className="block outline-none p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-cyan-500 focus:border-cyan-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
              placeholder="Write your text here..."
            ></textarea>

            {errors.text && (
              <span className="block mt-2 mb-1 text-red-500">
                This field is required
              </span>
            )}
          </div>

          <button
            type="submit"
            className="transition group inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-800 dark:text-gray-100 rounded-lg border border-cyan-500 hover:bg-cyan-500 focus:ring-2 focus:ring-cyan-300 dark:focus:ring-cyan-700"
          >
            <span>Extract</span>
            <InboxArrowDownIcon
              className={`ml-2 w-6 h-6 ${
                loading && "animate-bounce"
              } transition`}
            />
          </button>
        </form>{" "}
      </div>
      <div className="right pt-4 md:pt-0 md:pl-4">
        {loading ? (
          <div className="px-3 py-1 text-xs w-max mx-auto font-medium leading-none text-center text-cyan-800 bg-cyan-200 rounded-full animate-pulse dark:bg-cyan-900 dark:text-cyan-200">
            loading...
          </div>
        ) : (
          <>
            {" "}
            <h3 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Results
            </h3>
            {responses &&
              responses.map((response, index) => (
                <ResponseSnippet key={index} res={response} />
              ))}
            {errorMessage && (
              <div className="flex mx-auto w-max items-center text-red-500">
                <p className="font-semibold mr-2">{errorMessage}</p>
                <ExclamationCircleIcon className="w-6 h-6" />
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Form;
