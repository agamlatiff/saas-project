import Marquee from "react-fast-marquee";
import { FaAws, FaMicrosoft, FaSlack, FaStripe } from "react-icons/fa";

import { RiTailwindCssFill } from "react-icons/ri";
import { SiGooglecloud, SiVercel } from "react-icons/si";

const partnerships = [
  {
    id: 1,
    image: <FaAws className="hover:text-[#FF9900]" />, // AWS Orange
  },
  {
    id: 2,
    image: <SiGooglecloud className="hover:text-[#4285F4]" />, // Google Cloud Blue
  },
  {
    id: 3,
    image: <FaMicrosoft className="hover:text-[#F25022]" />, // Microsoft Orange (main)
  },
  {
    id: 4,
    image: <SiVercel className="hover:text-black" />, // Vercel (Black & White)
  },
  {
    id: 5,
    image: <FaStripe className="hover:text-[#635BFF]" />, // Stripe Purple
  },
  {
    id: 6,
    image: <FaSlack className="hover:text-[#611f69]" />, // Slack Deep Purple
  },
  {
    id: 7,
    image: <RiTailwindCssFill className="hover:text-[#38BDF8]" />, // Tailwind Blue
  },
]


const Partner = () => {
  return (
    <div className="text-center mt-20 text-2xl font-medium my-20 ">
      <h1 className="mb-15">The world&apos;s best companies trust Higher</h1>
      <Marquee gradient={false} speed={50} pauseOnHover={true}>
        {[...partnerships, ...partnerships].map((partner, index) => (
          <div key={`${index}-${partner.id}`} className="mx-12 *:size-14">
            {partner.image}
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Partner;
