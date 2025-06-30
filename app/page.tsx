import BenefitsHome from "@/components/homes/BenefitsHome";
import BlogHome from "@/components/homes/BlogHome";
import FeaturesHome from "@/components/homes/FeaturesHome";
import HeroHome from "@/components/homes/HeroHome";
import IntegrationsHome from "@/components/homes/IntegrationsHome";
import Journey from "@/components/Journey";
import Partner from "@/components/Partner";
import Solutions from "@/components/SolutionsHome";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <div>
      <HeroHome/>
      <Partner/>
      <div className="text-center my-22 space-y-8">
        <h1 className="text-2xl text-stone-700 font-medium">Higher is used by 100.000+ companies across the globe</h1>
        <button className="py-2 px-6 rounded-full ring-2 ring-indigo-600 hover:ring-3 text-stone-900">Start you Higher Journey</button>
      </div>
      <BenefitsHome/>
      <Journey/>
      <FeaturesHome/>
      <Solutions/>
      <IntegrationsHome/>
      <Testimonials/>
      <BlogHome/>
    </div>
  );
}
