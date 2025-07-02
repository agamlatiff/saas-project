import FAQ from "@/components/FAQAbout";
import FeaturePricing from "@/components/pricings/FeaturePricing";
import HeroPrincing from "@/components/pricings/HeroPrincing";
import Testimonials from "@/components/Testimonials";

const page = () => {
  return <div>
    <HeroPrincing/>
    <FeaturePricing/>
    <Testimonials/>
    <FAQ/>
  </div>;
};

export default page;
