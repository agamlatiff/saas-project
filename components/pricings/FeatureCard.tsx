import React from "react";
import { MdSubdirectoryArrowRight } from "react-icons/md";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactElement;
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <div className="flex flex-col items-center w-full space-4">
      <div className="flex items-center gap-2">
        <span className="text-indigo-600 p-3 rounded-full bg-white size-6">
          {icon}
        </span>
        <h1 className="text-lg text-stone-900 text-normal">{title}</h1>
      </div>
      <p className="max-w-lg text-stone-600">{description}</p>
      <button className="bg-white p-4 rounded-full flex items-center gap-3 text-stone-900 ring-1 ring-stone-200 hover:ring-2 hover:ring-indigo-600">
        Contact Sales <MdSubdirectoryArrowRight className="size-5" />
      </button>
    </div>
  );
};

export default FeatureCard;
