import type { Metadata } from "next";

import ContactPage from "@/components/pages/ContactPage";

export const metadata: Metadata = {
  title: "Contact Sazzad Hossen",
  description:
    "Start a conversation with Sazzad Hossen about backend engineering and product development.",
};

export default function Page() {
  return <ContactPage />;
}
