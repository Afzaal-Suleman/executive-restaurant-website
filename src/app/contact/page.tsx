import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me | Afzaal dev",
  description:
    "Get in touch with Afzaal Suleman, a full-stack developer. Reach out for freelance projects, collaborations, or inquiries about web development services.",
  openGraph: {
    title: "Contact Me | Afzaal dev",
    description:
      "Get in touch with Afzaal Suleman, a full-stack developer.",
    url: "https://www.afzaalsuleman.click/contact",
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
    title: "Contact Me | Afzaal dev",
    description:
      "Get in touch with Afzaal Suleman, a full-stack developer.",
    images: ["/profile.png"],
  },
};


function page() {
  return (
    <div className="my-10">
      <ContactForm />
    </div>
  );
}

export default page;
