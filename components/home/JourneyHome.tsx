import Image from "next/image";

const JourneyHome = () => {
  return (
    <section className="container grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-30 items-center justify-center mx-auto my-20">
      <div className="mx-auto order-2 lg-order-1">
        <div className="size-[300px] sm:size-[450px] lg:size-[400px] xl:size-[700px] rounded-full bg-gray-300/50 relative">
          <Image
            src={"/assets/journey-2.svg"}
            alt="benefit-1"
            width={200}
            height={200}
            className="absolute size-[150px] sm:size-[200px]"
          />
          <Image
            src={"/assets/journey-1.svg"}
            alt="benefit-1"
            width={200}
            height={200}
            className="absolute -bottom-5 size-[150px] sm:size-[200px] "
          />
          <Image
            src={"/assets/journey-3.svg"}
            alt="benefit-1"
            width={200}
            height={200}
            className="absolute -right-15 bottom-25 size-[150px] sm:size-[250px] sm:-right-20  sm:bottom-20"
            
          />
        </div>
      </div>

      <div className="flex flex-col gap-5 mx-auto order-1 lg:order-2 text-start">
        <p className="text-indigo-600 text-lg font-medium">Let’s Begin</p>
        <h2 className="font-semibold text-4xl sm:text-5xl lg:text-5xl my-2 ">
          Kickstart your Frontier <br /> journey today.
        </h2>
        <p className="max-w-2xl text-stone-700 mb-2 xl:max-w-xl">
          Discover the full potential of data analytics—turn insight into action
          and drive smarter, faster business decisions.
        </p>
        <label htmlFor="subscribe">
          <input
            type="email"
            id="subscribe"
            name="subscribe"
            placeholder="name@gmail.com"
            className="ring-1 ring-gray-300 py-2 px-4 w-full rounded-full active:ring-stone-700 xl:w-3/4 placeholder:text-stone-300 focus:placeholder:text-stone-400"
          />
          <button className="bg-indigo-600 w-full my-4 cursor-pointer py-2 px-4 rounded-full text-white hover:bg-indigo-800 xl:w-3/4">
            Subscribe
          </button>
          <p className="text-stone-500 text-sm ">
            14 day trial - no credit card required
          </p>
        </label>
        
      </div>
    </section>
  );
};

export default JourneyHome;
