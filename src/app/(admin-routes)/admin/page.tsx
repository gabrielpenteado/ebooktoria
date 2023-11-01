"use client";

import React, { FormEvent, useContext } from "react";

import { EbookContext } from "@/context/EbookContext";

import { useMutation, useQuery } from "@apollo/client";
import { GET_EBOOKS } from "../../api/graphql/queries";
import { ADD_EBOOK } from "../../api/graphql/mutations";
import EbookList from "../../components/EbookList";

import { redirect } from "next/navigation";

import { useSession } from "next-auth/react";
import { ReturnButton } from "@/app/components/ReturnButton";

export default function AdminPage() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/");
    },
  });

  const {
    title,
    setTitle,
    image_url,
    setImage_url,
    description,
    setDescription,
    link,
    setLink,
  } = useContext(EbookContext);

  // const { data } = useQuery(GET_EBOOKS);

  const [addEbook] = useMutation(ADD_EBOOK, {
    variables: { image_url, title, description, link },
    refetchQueries: [{ query: GET_EBOOKS }],
  });

  // const ebooks: IEbook[] = data?.ebooks;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (image_url === "" || title === "" || link === "")
      return alert("Enter fields");

    addEbook({ variables: { image_url, title, link } });
    setImage_url("");
    setTitle("");
    setDescription("");
    setLink("");
  };

  return (
    <>
      <div className="h-[90vh] max-w-5xl bg-[#fafaff] rounded-b-lg flex flex-col justify-center items-center align-middle mx-auto">
        <span>
          <ReturnButton path="/userlogged" />
        </span>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-8 md:w-[600px] mt-20"
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="image_url">Type the image url:</label>
            <input
              value={image_url?.toString()}
              id="image_url"
              name="image_url"
              onChange={(e) => setImage_url(e.target.value)}
              type="text"
              placeholder="image_url"
              className="bg-transparent border text-black p-2 rounded-lg"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="title">Type the ebook title:</label>
            <input
              value={title?.toString()}
              id="title"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="title"
              className="bg-transparent border text-black p-2 rounded-lg"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="title">Type the description text:</label>
            <input
              value={description?.toString()}
              id="description"
              name="description"
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              placeholder="descritpion"
              className="bg-transparent border text-black p-2 rounded-lg"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="link">Type the ebook link:</label>
            <input
              value={link?.toString()}
              id="link"
              name="link"
              onChange={(e) => setLink(e.target.value)}
              type="text"
              placeholder="link"
              className="bg-transparent border text-black p-2 rounded-lg"
            />
          </div>
          <button className="bg-amber-400 text-white hover:bg-amber-500 p-2 rounded-lg">
            Add Ebook
          </button>
        </form>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 gap-y-12 w-full px-10 place-content-center mt-8">
        <EbookList />
      </div>
    </>
  );
}
