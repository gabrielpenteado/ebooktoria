import React, { ReactNode } from "react";
import { HeaderAdmin } from "../components/HeaderAdmin";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <>
      <HeaderAdmin />
      <div>{children}</div>
    </>
  );
}
