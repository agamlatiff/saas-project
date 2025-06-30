import { communicateData } from "@/data/communicate";
import Title from "../elements/Title";

const CommunicateProduct = () => {
  return <div className="text-center mx-auto container py-20">
    <Title description={"Our Product"} title={"Communicate the story"} isChildren={false} />
    <div className="w-[60%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 py-5 justify-items-center content-center p-10 ">
    {communicateData.map(({icon, title, description, lastDescription}, index) => (
      <div key={index} className="bg-gray-100 w-full flex items-center flex-col px-5 py-8 rounded-lg">
        <span className="text-3xl relative rounded-full text-indigo-600 ">{icon}</span>
        <h2 className="font-semibold text-xl mb-3 mt-5">{title}</h2>
        <p className="text-stone-800 font-medium mt-5 max-w-2xl">{description}</p>
        <p className="text-stone-600 font-medium max-w-2xl">{lastDescription}</p>
      </div>
    ) )}
    </div>
  </div>
};

export default CommunicateProduct;
