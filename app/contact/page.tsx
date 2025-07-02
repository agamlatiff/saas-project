import CTAContact from "@/components/contacts/CTAContact";
import HeroContact from "@/components/contacts/HeroContact";
import FAQ from "@/components/FAQAbout";
import Testimonials from "@/components/Testimonials";

const page = () => {
  return <div>
    <HeroContact/>
    <CTAContact/>
    <Testimonials/>
    <FAQ/>
  </div>;
};

export default page;
