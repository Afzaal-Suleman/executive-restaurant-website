import Skills from "@/components/Skills";
import SEO from "@/components/SEO";
function page() {
  return (
    <div>
       <SEO
        title="About Me | Afzaal dev"
        description="Learn more about Afzaal Suleman, a full-stack developer building scalable, responsive web applications using React, Next.js, Node.js, MongoDB, and Tailwind CSS."
        image="/profile.png" // public folder image
        url="https://www.afzaalsuleman.click/about"
      />
      <Skills />
    </div>
  );
}

export default page;
