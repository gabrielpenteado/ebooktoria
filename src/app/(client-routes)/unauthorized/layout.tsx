import React, { ReactNode } from "react";

interface UnauthorizedLayoutProps {
  children: ReactNode;
}

export default function UnauthorizedLayout({
  children,
}: UnauthorizedLayoutProps) {
  return (
    <>
      <div>{children}</div>
    </>
  );
}
