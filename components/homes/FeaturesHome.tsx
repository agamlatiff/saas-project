import Image from "next/image";;
import Title from "../elements/Title";
import { featuresProducts } from "@/data/features";

// HOME PAGE NOT YET GET COPYWRITER
const FeaturesHome = () => {
  return (
    <section className="my-30 bg-gray-100 py-15">
      <div className="flex items-center flex-col px-10 container mx-auto">
        <div className="text-center">
          <Title
            title="Our product comes with"
            description="Powerful Features"
            subtitle="these major "
            information="Higher is the next-generation SaaS platform designed to scale with
            your business. Experience seamless innovation, powerful tools, and a
            user-first design."
            isChildren={true}
          >
            capabilities
          </Title>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-15 items-center my-8">
          {featuresProducts.map((features, index) => (
            <div key={index}>
              <div className="bg-white p-10 rounded-2xl">
                <Image
                  src={features.image}
                  alt={features.title}
                  width={200}
                  height={200}
                  className="size-40 object-contain mx-auto"
                />
              </div>

              <div className="flex items-center gap-4 my-4 justify-center">
                <span className="text-indigo-600 text-xl lg:text-3xl">
                  {features.icon}
                </span>
                <h1 className="font-semibold text-lg lg:text-2xl">
                  {features.title}
                </h1>
              </div>
              <p className="text-stone-600 text-center text-md max-w-sm sm:max-w-lg md:max-w-2xl">
                {features.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesHome;
