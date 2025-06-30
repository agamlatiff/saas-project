import Image from "next/image";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";

const SoftwareTeamAbout = () => {
  return (
    <div className="w-full mx-auto bg-white overflow-hidden py-20 px-10">
      <div className="container mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-5 justify-between max-w-4xl mx-auto">
          <h1 className="font-semibold text-4xl md:text-5xl lg:text-6xl">
            The best software teams ship quickly and often.
          </h1>
          <div>
            <p className="text-stone-600 text-md">
              With its intuitive interface and powerful features, Higher
              empowers businesses to leverage technology for growth.
            </p>
            <button className="ring-1 p-3 rounded-full flex items-center gap-3 ring-gray-500 mt-5">
              Watch Video <MdOutlineSubdirectoryArrowRight className="size-6" />
            </button>
          </div>
        </div>
        <div className="relative w-fit mx-auto mt-10">
          <div className="inset-0 bg-black/40 absolute rounded-3xl"></div>
          <Image
            src="/assets/video.png"
            height={800}
            width={800}
            alt="sotware"
            className="aspect-video mx-auto object-cover w-[1300px] h-[400px] object-center rounded-3xl"
          />
          <button className="bg-white/30 backdrop-blur-6xl p-4 rounded-full  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:ring-2 hover:ring-white  text-white">
            Play Video (2:34)
          </button>
        </div>
        <p className="font-medium text-stone-800 text-lg max-w-2xl mx-auto mt-10 text-center">Experience the Stellar difference and unlock the true potential of your online <br/> business. Our state-of-the-art SaaS and technology</p>
      </div>
    </div>
  );
};

export default SoftwareTeamAbout;
