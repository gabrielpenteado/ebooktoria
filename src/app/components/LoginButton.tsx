"use client";

import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

export const LoginButton = () => {
  return (
    <>
      <a
        onClick={() => signIn("google", { callbackUrl: "/userlogged" })}
        className="w-full py-2 text-sm md:text-xl text-center text-white transition-colors duration-300 bg-purple-700 rounded-full
     hover:bg-purple-800 ease px-5 md:px-9 md:w-auto cursor-pointer"
      >
        Login
      </a>
    </>
  );
};

export default LoginButton;
