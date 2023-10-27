import React from "react";

export default function Unauthorized() {
  return (
    <div className="flex text-xl font-semibold flex-col w-full h-[80vh] gap-4 mx-auto justify-center items-center text-center">
      <h2>Sorry! You are unauthorized to use Ebooktoria as ADMIN</h2>
      <h2>SignOut from Google account and return to CLIENT page</h2>
    </div>
  );
}
