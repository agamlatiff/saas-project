import { FcCandleSticks } from "react-icons/fc";
import Title from "../elements/Title";
import FeatureCard from "./FeatureCard";
import { PiStackBold } from "react-icons/pi";

const FeaturePricing = () => {
  return (
    <section className="py-20 px-10 overflow-hidden mx-auto w-full">
      <div className="flex flex-col  items-center justify-between gap-20 container mx-auto max-w-[90%]">
        <div className=" flex flex-col text-center gap-2 max-w-3xl items-center w-full">
          <Title
            isChildren={false}
            description="Feature Section"
            title="See which is the best price plan for you"
            information=" With its intuitive interface and powerful features, Higher
              empowers businesses to leverage technology for growth and
              efficiency."
          />
        </div>
        <div className="flex flex-col lg:flex-row items-center my-5 gap-10 ">
          <FeatureCard
            title="Threads Enterprise"
            description="Experience the Higher difference and unlock the true potential of your online business."
            icon={<FcCandleSticks className="size-6" />}
          />
          <FeatureCard
            title="Thread Community"
            description="Stellar is more than just a SaaS and technology tempalte —it's a complete solution."
            icon={<PiStackBold />}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturePricing;
