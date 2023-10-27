import React, { ReactNode } from "react";
import { Header } from "../components/Header";

interface ClientLayoutProps {
  children: ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
}
