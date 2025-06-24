import BenefitsHome from "@/components/home/BenefitsHome";
import HeroHome from "@/components/home/HeroHome";
import JourneyHome from "@/components/home/JourneyHome";
import Partner from "@/components/Partner";


export default function Home() {
  return (
    <div className="px-5">
      <HeroHome/>
      <Partner/>
      <div className="text-center my-22 space-y-8">
        <h1 className="text-2xl text-stone-700 font-medium">Frontier is used by 100.000+ companies across the globe</h1>
        <button className="py-2 px-6 rounded-full ring-2 ring-indigo-600 hover:ring-3 text-stone-900">Start you Frontier Journey</button>
      </div>
      <BenefitsHome/>
      <JourneyHome/>
    </div>
  );
}
