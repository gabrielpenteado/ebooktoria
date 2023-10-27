"use client";

import React, { FormEvent, useContext } from "react";

import { EbookContext } from "@/context/EbookContext";

import { useMutation, useQuery } from "@apollo/client";
import { GET_EBOOKS } from "../../api/graphql/queries";
import { ADD_EBOOK } from "../../api/graphql/mutations";
import EbookList from "../../components/EbookList";

import { redirect } from "next/navigation";

import { useSession } from "next-auth/react";

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
      <div className="w-[100vw] h-[90vh] flex justify-center items-center align-middle">
        <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-[600px]">
          <div className="flex flex-col gap-1">
            <label htmlFor="image_url">Type the ebook url image:</label>
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
          <button className="bg-amber-400 text-white hover:bg-amber-500 p-2 rounded-lg ">
            Add Ebook
          </button>
        </form>
      </div>

      <div className="grid grid-cols-8 gap-4 w-[100vw]">
        <EbookList />
      </div>
    </>
  );
}
