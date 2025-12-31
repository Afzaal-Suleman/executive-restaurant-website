import Skills from "@/components/Skills";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me | Afzaal dev",
  description:
    "Learn more about Afzaal Suleman, a full-stack developer specializing in Next.js, React, Node.js, and MongoDB. Discover skills, experience, and projects.",
  openGraph: {
    title: "About Me | Afzaal dev",
    description:
      "Learn more about Afzaal Suleman, a full-stack developer specializing in modern web technologies.",
    url: "https://www.afzaalsuleman.click/about",
    siteName: "Afzaal dev",
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: "Afzaal dev Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Me | Afzaal dev",
    description:
      "Learn more about Afzaal Suleman, a full-stack developer specializing in Next.js, React, Node.js, and MongoDB.",
    images: ["/profile.png"],
  },
};

function page() {
  return (
    <div>
       
      <Skills />
    </div>
  );
}

export default page;
