import { Communicate } from "@/types/communicate";
import { BiCandles, BiTrophy } from "react-icons/bi";
import { FcPrivacy } from "react-icons/fc";
import { IoInformation } from "react-icons/io5";

export const communicateData: Communicate[] = [
  {
    icon: <BiTrophy/>,
    title: 'Improved SEO',
    description: 'Embrace the future of technology with Stellar. Our innovative SaaS template empowers',
    lastDescription : 'businesses to stay ahead'
  },
    {
    icon: <BiCandles/>,
    title: 'Design Support',
    description: 'Gain a competitive edge with our SEO optimization tools, ensuring your website',
    lastDescription : 'ranks higher'
  },
    {
    icon: <IoInformation/>,
    title: 'Attachments',
    description: 'Stellar puts you in control, allowing you to monitor performance, measure success, and ',
    lastDescription : 'adapt your strategy in real-time.'
  },
    {
    icon: <FcPrivacy/>,
    title: 'Privacy & News',
    description: 'Unlock the power of data analytics and gain actionable insights to make informed business ',
    lastDescription : 'decisions.'
  }
]