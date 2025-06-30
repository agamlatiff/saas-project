import Image from "next/image";
import Title from "./elements/Title";
import { solutionsCustomer } from "@/data/solutions";


const Solutions = () => {
  return (
    <section className="container mx-auto py-20">
      <div className="flex items-center lg:flex-row flex-col gap-20 px-10 mx-auto">
        <div>
          <Title description={"Our Key Features"} title={"Build a solution that helps"} subtitle={"you win more customers."} isChildren={false} />
          <div className="grid md:grid-cols-2  items-center gap-20 mt-10 ">
            {solutionsCustomer.map((solution, index) => (
              <div key={index}>
                <span className="text-3xl relative left-5 rounded-full text-indigo-600 ">{solution.icon}</span>
                <h2 className="font-semibold text-xl mb-3 mt-5">{solution.title}</h2>
                <p className="text-stone-600 font-medium mt-7 max-w-2xl">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto">
          <Image
            src={"/assets/solution.svg"}
            alt={"solution"}
            width={200}
            height={200}
            className="size-1/2 lg:w-full mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Solutions;
