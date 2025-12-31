import ProjectItem from "@/components/ProjectItem";
import { generateRandomProjects } from "@/utils/generateProjects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Afzaal dev",
  description:
    "Explore Afzaal Suleman's web development projects, built with Next.js, React, Node.js, MongoDB, and Tailwind CSS. See real-world applications and demos.",
  openGraph: {
    title: "Projects | Afzaal dev",
    description:
      "Explore Afzaal Suleman's web development projects and demos built using modern web technologies.",
    url: "https://www.afzaalsuleman.click/projects",
    siteName: "Afzaal dev",
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: "Afzaal dev Projects",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Afzaal dev",
    description:
      "Explore Afzaal Suleman's web development projects and demos built using modern web technologies.",
    images: ["/profile.png"],
  },
};
const page = () => {
  const projects = generateRandomProjects(6);

  return (
    <div className="w-full ">
       
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto mt-28 mb-15 px-14 max-w-[1200px]">
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            project={project}
            index={index}
            totalProjects={projects.length}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
