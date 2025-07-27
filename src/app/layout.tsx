import "@/styles/globals.css";
import type { Metadata } from "next";
import Layout from "@/Components/Layout";

export const metadata: Metadata = {
  title: "Design and styling your property",
  description:
    "We can help with designing your property interior and style your property",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
