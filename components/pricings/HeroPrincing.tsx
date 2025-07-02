import { Ri24HoursFill } from "react-icons/ri";
import Title from "../elements/Title";
import { TiVendorAndroid } from "react-icons/ti";
import { FaCheckCircle } from "react-icons/fa";

interface Pricing {
  id: number;
  name: string;
  description: string;
  discount: string;
  price: number;
  duration: string;
  spesific: string[];
  benefit: string[];
}

const pricing: Pricing[] = [
  {
    id: 1,
    name: "Developer",
    description:
      "Unlock the power of data analytics and gain actionable insights.",
    discount: "Save up to 15%",
    price: 16,
    duration: "/ Month",
    spesific: ["5GB", "48"],
    benefit: [
      "Developer docs",
      "API status notifications",
      "Submit cases higher web",
    ],
  },
  {
    id: 2,
    name: "Essential",
    description:
      "Unlock the power of data analytics and gain actionable insights.",
    discount: "Save up to 15%",
    price: 24,
    duration: "/ Month",
    spesific: ["15GB", "56"],
    benefit: [
      "Developer docs",
      "API status notifications",
      "Submit cases higher web",
    ],
  },
  {
    id: 3,
    name: "Business",
    description:
      "Unlock the power of data analytics and gain actionable insights.",
    discount: "Save up to 15%",
    price: 32,
    duration: "/ Month",
    spesific: ["15GB", "64"],
    benefit: [
      "Developer docs",
      "API status notifications",
      "Submit cases higher web",
    ],
  },
  {
    id: 4,
    name: "Developer",
    description:
      "Unlock the power of data analytics and gain actionable insights.",
    discount: "Save up to 15%",
    price: 40,
    duration: "/ Month",
    spesific: ["20GB", "72"],
    benefit: [
      "Developer docs",
      "API status notifications",
      "Submit cases higher web",
    ],
  },
];

const HeroPrincing = () => {
  return (
    <section className="pb-20 px-10 w-full overflow-hidden mx-auto bg-gradient-to-b from-white to-stone-100">
     <div className="mx-auto w-full container flex flex-col items-center mb-10 text-center">
       <Title
        description="Our Pricing"
        title="Pricing built to suit all"
        subtitle="types of"
        isChildren={true}
        information="Embrace the future of technology with Higher. Our innovative SaaS template empowers businesses."
      >
        business
      </Title>
     </div>
      <div className="grid grid-cols-1 gap-10 items-center mx-auto w-full container xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {pricing.map(
          ({
            id,
            name,
            description,
            discount,
            price,
            duration,
            spesific,
            benefit,
          }) => (
            <div
              key={id}
              className="bg-white p-10 rounded-md flex flex-col items-center space-5 shadow-md ring-1 ring-stone-200"
            >
              <h1 className="text-2xl font-bold pt-8">{name}</h1>
              <p className="text-stone-600 my-4 text-center text-md max-w-sm">{description}</p>
              <p className="text-base p-2 rounded-full text-black bg-gray-100">
                {discount}
              </p>
              <div className="flex items-center gap-2 my-5 ">
                <h4 className="text-5xl font-medium">${price.toFixed(2)}</h4>
                <span className="text-stone-600/50">{duration}</span>
              </div>
              <button className="bg-white py-2 mt-4 px-4 w-full rounded-full ring-1 ring-stone-300 text-black font-medium text-lg hover:bg-indigo-600 hover:text-white duration-500 transition-all ease-in-out cursor-pointer">
                Read the docs
              </button>
              <hr className="text-stone-500/30 w-full my-8" />
              <div className="space-y-3 w-full">
                {spesific.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                    <span>
                      {index === 0 ? (
                        <TiVendorAndroid className="size-6" />
                      ) : (
                        <Ri24HoursFill className="size-6" />
                      )}
                    </span>
                    <h1 className="text-stone-800 font-medium font-md">
                      {item}{" "}
                      <span className="text-stone-600/70">
                        {index === 0 ? "Bandwith" : "Limit Support"}
                      </span>
                    </h1>
                  </div>
                ))}
              </div>
              <hr className="text-stone-500/30 w-full my-8 " />
              <div className="my-3 space-y-3 w-full">
                {benefit.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <span>
                      <FaCheckCircle className="size-6 text-indigo-600" />
                    </span>
                    <h2 className="text-stone-900">{item}</h2>
                  </div>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default HeroPrincing;
