import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PlagiaTrace – Find Exact Sources of Plagiarized Content",
  description: "Identify specific URLs and documents where plagiarized text originated. Built for educators and academic institutions."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e3935b1a-9365-457e-9dbf-8d854a042131"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
