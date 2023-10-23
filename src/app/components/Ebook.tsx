import React from "react";
import Link from "next/link";
import Image from "next/image";
// import { DELETE_EBOOK } from "../api/graphql/mutations";
// import { GET_EBOOKS } from "../api/graphql/queries";
// import { useMutation } from "@apollo/client";
import { IEbook } from "@/types";

interface Props {
  ebook: IEbook;
}

const BASE_URL = process.env.NEXT_PUBLIC_URL;

export default function Ebook({ ebook }: Props) {
  // const [deleteEbook] = useMutation(DELETE_EBOOK, {
  //   refetchQueries: [{ query: GET_EBOOKS }],
  // });

  return (
    <article className="flex flex-col p-4 bg-gray-200 dark:bg-zinc-800 hover:scale-105 shadow-lg hover:shadow-lg hover:bg-gray-300 transition duration-300 ease-out text-black rounded-lg ">
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
      {/* description */}
      <p className="text-xs my-2 line-clamp-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ab
        recusandae repudiandae ratione quia voluptatibus tempora dolores,
        veritatis cum, soluta numquam voluptatum earum obcaecati illum dolor.
        Fuga incidunt maxime culpa.
      </p>
      {/* source and date */}
      {/* <div className="flex justify-between italic	 ß text-xs mt-auto  text-slate-500">
          <p className="text-white text-lg">Authors :{ebook?.authors.length}</p>
        </div> */}
      <Link
        // href={`${BASE_URL}/ebook/${ebook.id}`}
        href={ebook.link}
        target="_blank"
        className="bg-orange-500 mt-5 p-2 rounded-lg text-center"
      >
        Read More
      </Link>

      {/* <button
          onClick={() => deleteEbook({ variables: { id: ebook.id } })}
          className="bg-red-500 mt-5 p-2 rounded-lg"
        >
          Delete
        </button> */}
    </article>
  );
}
