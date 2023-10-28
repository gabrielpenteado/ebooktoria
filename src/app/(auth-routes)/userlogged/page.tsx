import React from "react";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const UserLogged = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/unauthorized");
  }

  return (
    <div className="flex flex-col h-[80vh] justify-center items-center text-center">
      <Link
        href={"/admin"}
        className=" mb-8  py-3 text-xl text-center text-white transition-colors duration-300 bg-purple-700 rounded-full
       hover:bg-purple-800 ease px-9 w-auto"
      >
        Client Admin
      </Link>

      <Link
        href={"/api/graphql"}
        className="py-3 text-xl text-center text-white transition-colors duration-300 bg-purple-700 rounded-full
       hover:bg-purple-800 ease px-9 w-auto"
      >
        Apollo Server
      </Link>
    </div>
  );
};

export default UserLogged;
