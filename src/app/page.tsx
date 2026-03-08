import HomeCom from "@/components/HomeCom";
import type { Metadata } from "next";


export const metadata: Metadata = {
  metadataBase: new URL("https://executiverestaurant.com"),
  title: {
    default: "Executive Restaurant | Fine Dining Experience",
    template: "%s | Executive Restaurant",
  },
  description:
    "Executive Restaurant offers a premium fine dining experience with exquisite cuisine, elegant ambiance, and exceptional service. Reserve your table today.",

  keywords: [
    "Executive Restaurant",
    "Fine Dining Restaurant",
    "Luxury Restaurant",
    "Restaurant Reservations",
    "Private Dining",
    "Restaurant Events",
    "Best Restaurant",
  ],

  openGraph: {
    title: "Executive Restaurant | Fine Dining Experience",
    description:
      "Discover a premium fine dining experience at Executive Restaurant. Enjoy delicious cuisine, elegant ambiance, and easy table reservations.",
    url: "https://executiverestaurant.com",
    siteName: "Executive Restaurant",
    images: [
      {
        url: "/restaurant-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Executive Restaurant Fine Dining",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Executive Restaurant | Fine Dining Experience",
    description:
      "Experience luxury dining at Executive Restaurant. Reserve your table and enjoy an unforgettable culinary journey.",
    images: ["/restaurant-hero.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};
export default function Home() {
  return (
    <div>
      <HomeCom />
    </div>
  );
}
