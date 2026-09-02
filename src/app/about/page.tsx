import type { Metadata } from "next";

import AboutPage from "@/components/pages/AboutPage";

export const metadata: Metadata = {
  title: "About Sazzad Hossen — Software Engineer",
  description:
    "Learn about Sazzad Hossen, a backend-focused software engineer building secure systems and responsive React and Next.js interfaces.",
};

export default function Page() {
  return <AboutPage />;
}
