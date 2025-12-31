import ProjectItem from "@/components/ProjectItem";
import { generateRandomProjects } from "@/utils/generateProjects";
import SEO from "@/components/SEO";
const page = () => {
  const projects = generateRandomProjects(6);

  return (
    <div className="w-full ">
       <SEO
        title="Projects | Afzaal dev"
        description="Explore Afzaal Suleman's full-stack web development projects built with React, Next.js, Node.js, MongoDB, and Tailwind CSS."
        url="https://www.afzaalsuleman.click/projects"
      />
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
