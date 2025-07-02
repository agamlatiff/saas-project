import React from "react";
import { MdSubdirectoryArrowRight } from "react-icons/md";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactElement;
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <div className="flex flex-col w-full space-4 bg-gray-50 rounded-lg ring-1 ring-stone-100 p-10">
      <div className="flex items-center gap-2 w-full">
        <span className="text-indigo-600 *:size-7 bg-white h-12 w-12 flex items-center justify-center rounded-full mb-5">
          {icon}
        </span>
        <h1 className="text-lg text-stone-900 font-normal  relative bottom-2">{title}</h1>
      </div>
      <p className="max-w-lg text-stone-600">{description}</p>
      <button className="flex-1 w-fit mt-5 bg-white py-3 px-7 flex items-center gap-2 rounded-full text-stone-900 ring-1 ring-stone-200 hover:ring-2 hover:ring-indigo-600">
        Contact Sales <MdSubdirectoryArrowRight className="size-5" />
      </button>
    </div>
  );
};

export default FeatureCard;
