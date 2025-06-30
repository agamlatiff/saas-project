import { FaCheckCircle } from "react-icons/fa";
import Title from "../elements/Title";
import Image from "next/image";

const features = [
  {
    icon: <FaCheckCircle />,
    title: "Add your feature details here",
  },
  {
    icon: <FaCheckCircle />,
    title: "Inform your customers about your features",
  },
]

const HeroAbout = () => {
  return <div className="bg-gradient-to-b from-white bg-gray-100 pb-20  w-full mx-auto overflow-hidden">
    <div className="container mx-auto grid grid-cols-1 items-center lg:grid-cols-2 gap-20 px-20">
      <div className="flex items-center flex-col gap-5 w-full mx-auto">
        <Title description='Our Values' title="Our team shares" subtitle="values to" isChildren={true} information={`"Stellar is more than just a SaaS and technology template —it's a complete solution."`}>
           Success
        </Title>
        <div className="py-5">
        {features.map((item, index) => 
          <div key={index} className="flex items-center gap-4">
            <span className="size-6">{item.icon}</span>
            <h2 className="text-lg text-stone-800 font-medium">{item.title}</h2>
          </div>
        )}
        </div>
        <div className="flex items-center gap-4">
          <button className="p-4 rounded-full ring-1 ring-gray-500 bg-white text-medium text-lg hover:bg-black hover:text-white">Get Free Trial</button>
          <button className="text-medium text-lg text-stone-800 bg-gray-200 hover:ring-2 hover:ring-stone-500 p-4 rounded-full">See How it Works</button>
        </div>
      </div>
      <div className="flex items-center mx-auto">
        <Image width={600} height={600} src="/assets/about.svg" alt="about image" />
      </div>
    </div>
  </div>;
};

export default HeroAbout;
