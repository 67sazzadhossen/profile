import type { Metadata } from "next";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";

export const metadata: Metadata = {
  title: "Creative Developer Portfolio",
  description: "A creative developer portfolio focused on immersive digital experiences.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
