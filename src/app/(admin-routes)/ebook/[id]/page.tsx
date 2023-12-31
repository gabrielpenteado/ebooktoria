"use client";

import {
  ADD_AUTHOR,
  ADD_CATEGORY,
  DELETE_AUTHOR,
  DELETE_CATEGORY,
  UPDATE_EBOOK,
} from "@/app/api/graphql/mutations";
import { GET_EBOOK } from "@/app/api/graphql/queries";
import { IEbook } from "@/types";
import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import { ReturnButton } from "@/app/components/ReturnButton";

type Props = {
  params: {
    id: string;
  };
};

const Ebook = ({ params: { id } }: Props) => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/");
    },
  });

  const [title, setTitle] = useState("");
  const [image_url, setImage_url] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");

  const { data, loading, error } = useQuery(GET_EBOOK, {
    variables: { id },
  });

  const [addAuthor] = useMutation(ADD_AUTHOR, {
    variables: { ebookId: id, authorName },
    refetchQueries: [{ query: GET_EBOOK, variables: { id } }],
  });

  const [deleteAuthor] = useMutation(DELETE_AUTHOR, {
    refetchQueries: [{ query: GET_EBOOK, variables: { id } }],
  });

  const [addCategory] = useMutation(ADD_CATEGORY, {
    variables: { ebookId: id, categoryName },
    refetchQueries: [{ query: GET_EBOOK, variables: { id } }],
  });

  const [deleteCategory] = useMutation(DELETE_CATEGORY, {
    refetchQueries: [{ query: GET_EBOOK, variables: { id } }],
  });

  const [updateEbook] = useMutation(UPDATE_EBOOK, {
    variables: {
      id: id,
      title: title,
      image_url: image_url,
      description: description,
      link: link,
    },
    refetchQueries: [{ query: GET_EBOOK, variables: { id } }],
  });

  const ebook: IEbook = data?.ebook;
  // console.log(ebook);

  const handleAddAuthor = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (authorName === "") return alert("Please enter author name");
    addAuthor({ variables: { ebooklId: id, authorName } });
    setAuthorName("");
  };

  const handleAddCategory = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (categoryName === "") return alert("Please enter category name");
    addCategory({ variables: { ebooklId: id, categoryName } });
    setCategoryName("");
  };

  const handleUpdateEbook = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title === "" || image_url === "" || description === "" || link === "")
      return alert("Please enter all fields");
    updateEbook({
      variables: {
        id: id,
        title: title,
        image_url: image_url,
        description: description,
        link: link,
      },
    });
    setTitle("");
    setImage_url("");
    setDescription("");
    setLink("");
  };

  if (loading)
    return (
      <p className="text-black flex items-center justify-center">
        Loading ....
      </p>
    );
  if (error)
    return (
      <p className="text-black flex flex-col items-center justify-center">
        Oops! Something went wrong ....
        <span>${error.message}</span>
      </p>
    );
  return (
    <article className="flex flex-col align-middle items-center px-10 justify-center max-w-5xl bg-[#fafaff] mx-auto text-white">
      <section className="flex flex-col mx-auto align-middle justify-center items-center gap-10 mt-4">
        {ebook.image_url && (
          <Image
            height={200}
            width={200}
            src={ebook.image_url}
            alt={ebook.title}
            className="flex justify-center align-middle items-center ml-5"
          />
        )}

        <div className="p-2 flex flex-col">
          <h1 className="text-4xl flex justify-center mb-4 text-black">
            {ebook.title}
          </h1>

          <div className="flex gap-2 text-black">
            {ebook?.authors?.map((author) => (
              <div key={author.id} className="flex items-center gap-2">
                <h2 className="font-bold">{author?.authorName}</h2>
                <span className="cursor-pointer">
                  <AiFillCloseCircle
                    size="1.2rem"
                    onClick={() =>
                      deleteAuthor({
                        variables: {
                          id: author.id,
                        },
                      })
                    }
                    color="red"
                  />
                </span>
              </div>
            ))}
          </div>

          <p className="text-slate-400 ">{ebook.description}</p>

          <div className="flex gap-2 text-black">
            {ebook?.categories?.map((category) => (
              <div key={category.id} className="flex items-center gap-2">
                <h2 className="font-bold">{category?.categoryName}</h2>
                <span className="cursor-pointer">
                  <AiFillCloseCircle
                    size="1.2rem"
                    onClick={() =>
                      deleteCategory({
                        variables: {
                          id: category.id,
                        },
                      })
                    }
                    color="red"
                  />
                </span>
              </div>
            ))}
          </div>

          {/* add author form */}
          <form
            onSubmit={handleAddAuthor}
            className="flex justify-center mt-5 space-x-2"
          >
            <input
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              type="text"
              placeholder="Enter Author"
              className=" md:w-[300px] bg-transparent text-black border p-2 rounded-lg"
            />
            <button
              disabled={!authorName}
              className=" p-2 rounded-lg bg-yellow-500  disabled:bg-gray-500 disabled:cursor-not-allowed"
            >
              Add Author
            </button>
          </form>

          <form
            onSubmit={handleAddCategory}
            className="flex justify-center mt-2 space-x-2"
          >
            <input
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              type="text"
              placeholder="Enter Category"
              className="md:w-[300px] bg-transparent text-black border p-2 rounded-lg"
            />
            <button
              disabled={!categoryName}
              className="p-2 rounded-lg bg-yellow-500  disabled:bg-gray-500 disabled:cursor-not-allowed"
            >
              Add Category
            </button>
          </form>
        </div>
      </section>

      {/* add category form */}

      {/* update form */}
      <form
        onSubmit={handleUpdateEbook}
        className="flex flex-col mt-4 justify-center gap-2 "
      >
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Enter new title"
          className="md:w-[600px] bg-transparent border text-black p-2 rounded-lg"
        />
        <input
          value={image_url}
          onChange={(e) => setImage_url(e.target.value)}
          type="text"
          placeholder="Enter image url"
          className="md:w-[600px] bg-transparent border text-black p-2 rounded-lg"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Enter description text"
          className="md:w-[600px] bg-transparent border text-black p-2 rounded-lg"
        />
        <input
          value={link}
          onChange={(e) => setLink(e.target.value)}
          type="text"
          placeholder=" Enter link"
          className="md:w-[600px] bg-transparent border text-black p-2 rounded-lg"
        />
        <button
          disabled={!title && !image_url && !link}
          className="bg-yellow-500 disabled:bg-gray-500 rounded-lg p-2 disabled:cursor-not-allowed"
        >
          Update
        </button>
      </form>

      <span className="py-10">
        <ReturnButton path="/admin" />
      </span>
    </article>
  );
};

export default Ebook;
