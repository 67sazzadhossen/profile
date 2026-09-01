import type { Metadata } from "next";

import AboutPage from "@/components/pages/AboutPage";

export const metadata: Metadata = {
  title: "About Sazzad Hossen — Backend Engineer",
  description:
    "Learn about Sazzad Hossen, a backend engineer building secure APIs, real-time platforms, and scalable product infrastructure.",
};

export default function Page() {
  return <AboutPage />;
}
