import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";
import Title from "../elements/Title";
import { benefitSolution } from "@/data/benefit";

const BenefitsHome = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-30 py-20  container mx-auto">
      <div className="flex flex-col mx-auto px-10">
        <Title
          description="Introducing Higher"
          title="Scalable solutions built for tomorrow"
          information="Higher isn’t just another SaaS template — it’s your launchpad for
          digital transformation, crafted to adapt, scale, and grow with your
          business."
          isChildren={false}
        />
        {benefitSolution.map((benefit, index) => (
          <div key={index} className="flex items-center gap-4 my-2">
            <FaCheckCircle className="size-5 text-indigo-500" />
            <h2 className="font-medium lg:text-lg text-md">{benefit}</h2>
          </div>
        ))}
        <button className="flex items-center gap-2 border w-fit py-2 px-4 rounded-full ring-1 ring-indigo-600 mt-5 hover:ring-3 cursor-pointer">
          Get Free Trial <MdOutlineSubdirectoryArrowRight />{" "}
        </button>
      </div>
      <div className="mx-auto">
        <div className="size-[300px] sm:size-[450px] lg:size-[400px]  2xl:size-[600px] rounded-full bg-gray-300/50 relative">
          <Image
            src={"/assets/benefit-1.svg"}
            alt="benefit-1"
            width={200}
            height={200}
            className="lg:size-[240px] md:size-[190px] sm:size-[150px] size-[150px] 2xl:size-[300px] "
          />
          <Image
            src={"/assets/benefit-2.svg"}
            alt="benefit-2"
            width={100}
            height={100}
            className="absolute bottom-5 left-2 size-[100px] sm:size-[130px] md:size-[170px] lg:size-[150px] 2xl:size-[200px]"
          />
          <Image
            src={"/assets/benefit-3.svg"}
            alt="benefit-3"
            width={200}
            height={200}
            className="absolute -right-10 size-[170px] md:-right-5 md:size-[230px] lg:size-[200px] lg:bottom-0 2xl:size-[300px]"
          />
        </div>
      </div>
    </section>
  );
};

export default BenefitsHome;
