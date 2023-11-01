import { DELETE_EBOOK } from "../api/graphql/mutations";
import { GET_EBOOKS } from "../api/graphql/queries";
import { IEbook } from "@/types";
import { useMutation } from "@apollo/client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

interface Props {
  ebook: IEbook;
}

const BASE_URL = process.env.NEXT_PUBLIC_URL;

export default function EbookAdmin({ ebook }: Props) {
  const [deleteEbook] = useMutation(DELETE_EBOOK, {
    refetchQueries: [{ query: GET_EBOOKS }],
  });

  return (
    <article className="flex flex-col min-w-fit max-w-screen-sm p-4 bg-gray-200 dark:bg-zinc-800 hover:scale-105 shadow-lg hover:shadow-lg hover:bg-gray-300 transition duration-300 ease-out text-black rounded-lg ">
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
      <h1 className="font-bold text-xl text-center mt-6 mb-2">{ebook.title}</h1>
      {/* authors*/}
      <div className="flex justify-between italic text-xs mt-auto text-gray-800">
        <p className="text-gray-700 text-sm">
          author:{" "}
          {ebook?.authors.map((author) => (
            <span key={author.id}>{author.authorName};</span>
          ))}
        </p>
      </div>
      {/* description */}
      <p className="text-xs my-2 line-clamp-3">{ebook.description}</p>

      {/* categories */}
      <p className="text-xs font-sans">
        category:{" "}
        {ebook?.categories.map((category) => (
          <span key={category.id}>{category.categoryName} ;</span>
        ))}
      </p>

      <Link
        href={`${BASE_URL}/ebook/${ebook.id}`}
        target="_blank"
        className="bg-yellow-500 hover:bg-yellow-600 mt-5 p-2 text-white rounded-lg text-center"
      >
        Update
      </Link>

      <button
        onClick={() => deleteEbook({ variables: { id: ebook.id } })}
        className="bg-red-500 hover:bg-red-600 mt-5 p-2 text-white rounded-lg"
      >
        Delete
      </button>
    </article>
  );
}
