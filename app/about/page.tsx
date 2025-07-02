import CompanyAbouts from "@/components/abouts/CompanyAbouts";
import HeroAbout from "@/components/abouts/HeroAbout";
import SoftwareTeamAbout from "@/components/abouts/SoftwareTeamAbout";
import Users from "@/components/abouts/Users";
import Partner from "@/components/Partner";
import Solutions from "@/components/SolutionsHome";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQAbout";


const Abouts = () => {
  return <section className="w-full ">
    <HeroAbout/>
    <Users/>
    <SoftwareTeamAbout/>
    <CompanyAbouts/>
    <Solutions/>
    <Partner/>
    <div className="my-25 container mx-auto w-full flex flex-col items-center">
      <p className="text-stone-600 mb-6 text-lg ">Higher is used by over 55,000+ companies across the globe</p>
      <button className="p-3 rounded-full ring-1 ring-stone-400 text-black font-medium text-lg hover:ring-2 hover:ring-stone-800">Start your Higher Journey</button>
    </div>
    <Testimonials/>
    <FAQ/>
  </section>;
};

export default Abouts;
