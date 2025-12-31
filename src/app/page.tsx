import HomeCom from "@/components/HomeCom";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Afzaal dev | Full-Stack Developer Portfolio",
  description:
    "I build scalable, responsive full-stack web applications using modern technologies like React, Next.js, Node.js, Express, MongoDB, and Tailwind CSS.",
  openGraph: {
    title: "Afzaal dev | Full-Stack Developer Portfolio",
    description:
      "Showcasing scalable, responsive web applications built with React, Next.js, Node.js, MongoDB, and Tailwind CSS.",
    url: "https://www.afzaalsuleman.click",
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
    title: "Afzaal dev | Full-Stack Developer Portfolio",
    description:
      "Showcasing scalable, responsive web applications built with React, Next.js, Node.js, MongoDB, and Tailwind CSS.",
    images: ["/profile.png"],
  },
};
export default function Home() {
  return (
    <div>
      <HomeCom />
    </div>
  );
}
