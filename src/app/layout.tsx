import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Providers } from "./Providers";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Afzaal dev",
  description:
    "I build scalable, responsive full-stack web applications using modern technologies like React, Next.js, Node.js, Express, MongoDB, and Tailwind CSS.",
  keywords: [
    "Afzaal",
    "Portfolio",
    "Frontend Developer",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "MongoDB",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "Web Development",
    "JavaScript",
    "TypeScript",
    "Software Engineer",
    "Web Applications",
    "Responsive Design",
    "Scalable Applications",
    "Afzaal Suleman",
    "Afzaal dev",
    "Afzaal Portfolio",
    "Afzaal Full-Stack Developer",
    "Afzaal Web Developer",
    "django",
    "python",
    "angular",
    "vue",
    "html",
    "css",
    "bootstrap",
    "graphql",
    "MERN Stack",
    "MEAN Stack",
    "Web Developer Portfolio",
    "Software Developer Portfolio",
    "Afzaal Web Apps",
    "Afzaal Projects",
  ],
  authors: [{ name: "Afzaal" }],
  openGraph: {
    title: "Afzaal dev | Full-Stack Developer Portfolio",
    description:
      "Showcasing scalable, responsive web applications using modern technologies like React, Next.js, Node.js, MongoDB, and Tailwind CSS.",
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
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Afzaal dev | Full-Stack Developer Portfolio",
    description:
      "Showcasing scalable, responsive web applications using modern technologies like React, Next.js, Node.js, MongoDB, and Tailwind CSS.",
    images: ["/profile.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning defaultValue="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Afzaal Suleman",
                url: "https://www.afzaalsuleman.click",
                sameAs: [
                  "https://www.linkedin.com/in/afzaal-suleman-3ab899298/",
                  "https://github.com/Afzaal-Suleman",
                ],
                jobTitle: "Full-Stack Developer",
                worksFor: {
                  "@type": "Organization",
                  name: "Freelance / Self-Employed",
                },
              }),
            }}
          />

          <div className="mb-20">
            <Navbar />
          </div>
          {children}
        </Providers>
      </body>
    </html>
  );
}
