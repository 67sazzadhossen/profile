import type { Metadata } from "next";

import WorksPage from "@/components/pages/WorksPage";

export const metadata: Metadata = {
  title: "All Works — Sazzad Hossen",
  description:
    "Explore backend systems, full-stack products, integrations, and selected engineering work by Sazzad Hossen.",
};

export default function Page() {
  return <WorksPage />;
}
