import Image from "next/image";

const HeroHome = () => {
  return (
    <div className="mx-auto bg-gray-100 h-screen w-full">
      <div className="py-44 mx-auto container text-center ">
        <div>
          <p className="text-xl font-medium text-indigo-700 mb-6">Introducing Frontier</p>
          <h1 className="xl:max-w-5xl xl:text-8xl text-5xl sm:text-6xl lg:text-7xl font-semibold text-black  md:max-w-2xl lg:max-w-4xl mb-16 xl:mb-22 mx-auto ">
            The Future of Software <br />{" "}
            <span className="relative top-6 xl:top-10">
              Starts with
              <span className="text-white lg:px-8 px-6  bg-indigo-600 rounded-full relative left-5 ">
                Frontier
              </span>
            </span>
          </h1>
          <p className="max-w-2xl text-lg text-stone-600 mx-auto">
            Frontier is the next-generation SaaS platform designed to scale with
            your business. Experience seamless innovation, powerful tools, and a
            user-first design.
          </p>
          <Image src={'/assets/hero.png'} alt={'hero'} width={600} height={600} className="mx-auto my-10"/>
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
