import React from "react";

import ebooktoria from "../../../public/ebooktoria.png";
import Image from "next/image";
import LoginButton from "./LoginButton";
import Link from "next/link";

export const Header = () => {
  return (
    <nav className="flex p-2 pb-6 w-full bg-zinc-800 justify-between">
      <div className="mx-auto">
        <Image
          src={ebooktoria}
          alt="ebooktoria"
          className="flex justify-center mx-auto"
        />
      </div>

      <div className="my-auto pr-4">
        <LoginButton />
      </div>
    </nav>
  );
};
