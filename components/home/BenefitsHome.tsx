import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";

const benefitSolution = [
  "Share the extra text you want to add as a feature.",
  "Add your feature text here.",
  "Add the text you'd like to includes as a feature.",
];

const BenefitsHome = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-15 py-20 container mx-auto">
      <div className="flex flex-col mx-auto">
        <p className="text-xl xl:text-2xl text-indigo-600">
          Introducing Frontier
        </p>
        <h1 className="font-semibold text-5xl xl:text-7xl mt-5 mb-7">
          Scalable solutions built for tomorrow
        </h1>
        <p className="max-w-lg lg:max-w-2xl text-stone-500 mb-5 xl:text-xl">
          Frontier isn’t just another SaaS template — it’s your launchpad for
          digital transformation, crafted to adapt, scale, and grow with your
          business.
        </p>

        {benefitSolution.map((benefit, index) => (
          <div key={index} className="flex items-center gap-4 my-2">
            <FaCheckCircle className="size-5 text-indigo-500" />
            <h2 className="font-medium lg:text-lg text-md">{benefit}</h2>
          </div>
        ))}
        <button className="flex items-center gap-2 border w-fit py-2 px-4 rounded-full ring-1 ring-indigo-600 mt-5 hover:ring-3 cursor-pointer">Get Free Trial <MdOutlineSubdirectoryArrowRight/> </button>
      </div>
      <div className="mx-auto">
        <div className="size-[300px] sm:size-[400px] md:size[450px] lg:size-[500px]  xl:size-[550px] rounded-full bg-gray-300/50 relative">
          <Image
            src={"/assets/benefit-1.svg"}
            alt="benefit-1"
            width={200}
            height={200}
            className="lg:size-[240px] md:size-[170px] sm:size-[150px] size-[150px] "
          />
          <Image
            src={"/assets/benefit-2.svg"}
            alt="benefit-2"
            width={100}
            height={100}
            className="absolute bottom-5 left-2 size-[100px] sm:size-[130px] lg:size-[150px]"
          />
          <Image
            src={"/assets/benefit-3.svg"}
            alt="benefit-3"
            width={200}
            height={200}
            className="absolute -right-10 size-[170px] md:right-0 lg:size-[230px] lg:bottom-0"
          />
        </div>
      </div>
    </section>
  );
};

export default BenefitsHome;
