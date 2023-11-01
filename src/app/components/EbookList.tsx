"use client";

import Ebook from "../../app/components/Ebook";
import EbookAdmin from "./EbookAdmin";
import { useQuery } from "@apollo/client";
import { GET_EBOOKS } from "../api/graphql/queries";
import { IEbook } from "@/types";
import { usePathname } from "next/navigation";

export default function EbookList() {
  const { data, loading, error } = useQuery(GET_EBOOKS);
  const ebooks: IEbook[] = data?.ebooks;
  // console.log(ebooks);

  const pathname = usePathname();
  // console.log(pathname);

  if (loading)
    return (
      <p className="text-black w-[100vw] flex items-center justify-center align-middle">
        Loading...
      </p>
    );

  if (error)
    return (
      <p className="text-black flex items-center justify-center">
        Oops! Something went wrong .... {error.message}
      </p>
    );

  if (pathname === "/")
    return ebooks.map((ebook) => <Ebook key={ebook.id} ebook={ebook} />);
  if (pathname === "/admin")
    return ebooks.map((ebook) => <EbookAdmin key={ebook.id} ebook={ebook} />);
}
