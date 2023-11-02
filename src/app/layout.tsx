import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ProviderApollo } from "../providers/apollo-provider/Provider";
import { ProviderNextAuth } from "@/providers/nextauth-provider/Provider";
import { EbookProvider } from "@/app/context/EbookContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ebooktoria",
  description:
    "A project dedicated to saving and sharing your favorite ebooks.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <EbookProvider>
        <ProviderApollo>
          <ProviderNextAuth>
            <body className={inter.className}>{children}</body>
          </ProviderNextAuth>
        </ProviderApollo>
      </EbookProvider>
    </html>
  );
}
