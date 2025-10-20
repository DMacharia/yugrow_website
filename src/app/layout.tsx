import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title:
    "Yugrow Careers Consulting - Grow Clarity. Build Confidence. Succeed in the Workplace.",
  description:
    "Professional career coaching and training services in Africa. 1-on-1 coaching, group training, and social impact programs to help you grow with confidence and clarity.",
  keywords:
    "career coaching, professional development, training, Africa, career growth, coaching services",
  authors: [{ name: "Yugrow Careers Consulting" }],
  openGraph: {
    title: "Yugrow Careers Consulting",
    description: "Grow Clarity. Build Confidence. Succeed in the Workplace.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
