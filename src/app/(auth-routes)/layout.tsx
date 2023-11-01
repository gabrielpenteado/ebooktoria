import React, { ReactNode } from "react";
import { HeaderAdmin } from "../components/HeaderAdmin";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <>
      <HeaderAdmin />
      <div>{children}</div>
    </>
  );
}
