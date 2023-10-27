import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IEbook } from "@/types";

interface Props {
  ebook: IEbook;
}

// const BASE_URL = process.env.NEXT_PUBLIC_URL;

export default function Ebook({ ebook }: Props) {
  return (
    <article className="flex flex-col min-w-fit p-4 bg-gray-200 dark:bg-zinc-800 hover:scale-105 shadow-lg hover:shadow-lg hover:bg-gray-300 transition duration-300 ease-out text-black rounded-lg ">
      {/* image */}
      {ebook.image_url && (
        <div className="flex justify-center">
          <Image
            src={ebook.image_url}
            width={160}
            height={160}
            alt={ebook.title}
            className="rounded-lg shadow-xl"
          />
        </div>
      )}

      {/*title  */}
      <h1 className="font-bold text-2xl text-center mt-6 mb-2">
        {ebook.title}
      </h1>
      {/* authors*/}
      <div className="flex justify-between italic text-xs mt-auto text-gray-800">
        <p className="text-gray-800 font-sans text-sm">
          author:{" "}
          {ebook?.authors.map((author) => (
            <span key={author.id}>{author.authorName};</span>
          ))}
        </p>
      </div>
      {/* description */}
      <p className="text-xs my-2 line-clamp-4">{ebook.description}</p>

      {/* categories */}
      <p className="text-xs font-sans">
        Category:{" "}
        {ebook?.categories.map((category) => (
          <span key={category.id}>{category.categoryName};</span>
        ))}
      </p>

      <Link
        // href={`${BASE_URL}/ebook/${ebook.id}`}
        href={ebook.link}
        target="_blank"
        className="bg-indigo-500 mt-5 p-2 text-white hover:bg-indigo-700 rounded-lg text-center"
      >
        Read More
      </Link>
    </article>
  );
}
