"use client";

import React, { useState, createContext } from "react";

interface IEbookContext {
  title: String;
  setTitle: (title: String) => void;
  image_url: String | undefined;
  setImage_url: (title: String) => void;
  description: String | undefined;
  setDescription: (description: String) => void;
  link: String | undefined;
  setLink: (title: String) => void;
}

export const EbookContext = createContext<IEbookContext>({
  title: "",
  setTitle: () => {},
  image_url: undefined,
  setImage_url: () => {},
  description: undefined,
  setDescription: () => {},
  link: undefined,
  setLink: () => {},
});

export function EbookProvider({ children }: { children: React.ReactNode }) {
  const [title, setTitle] = useState<String>("");
  const [image_url, setImage_url] = useState<String>("");
  const [description, setDescription] = useState<String>("");
  const [link, setLink] = useState<String>("");

  return (
    <EbookContext.Provider
      value={{
        title,
        setTitle,
        image_url,
        setImage_url,
        description,
        setDescription,
        link,
        setLink,
      }}
    >
      {children}
    </EbookContext.Provider>
  );
}
