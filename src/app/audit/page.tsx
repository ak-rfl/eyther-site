import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AuditPageClient from "@/components/AuditPageClient";

export const metadata: Metadata = {
  title: "Free Marketing Audit | homeAI",
  description:
    "Get a personalized marketing audit for your home services business. We'll analyze your market, competitors, and online presence — free, no obligation.",
};

export default function AuditPage() {
  return (
    <>
      <Nav />
      <AuditPageClient />
      <Footer />
    </>
  );
}
