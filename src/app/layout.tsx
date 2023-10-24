import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { EbookProvider } from "@/context/EbookContext";
import { Header } from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <EbookProvider>
        <Providers>
          <body className={inter.className}>
            <Header />
            {children}
          </body>
        </Providers>
      </EbookProvider>
    </html>
  );
}
