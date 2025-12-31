import ContactForm from "@/components/ContactForm";
import SEO from "@/components/SEO";
function page() {
  return (
    <div className="my-10">
       <SEO
        title="Contact Me | Afzaal dev"
        description="Get in touch with Afzaal Suleman, a full-stack developer. Reach out for freelance projects, collaborations, or inquiries about web development services."
        image="/profile.png" // use a public folder image
        url="https://www.afzaalsuleman.click/contact"
      />
      <ContactForm />
    </div>
  );
}

export default page;
