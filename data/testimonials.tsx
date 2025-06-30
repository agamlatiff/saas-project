import {
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import { Testimonial } from "@/types/testimonial";

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Liam Harper",
    username: "@liam_design",
    platform: "twitter",
    icon: <FaTwitter className="text-sky-500" />,
    avatar: "/assets/man-1.png",
    content:
      "DesignCraft’s tools have completely changed the way I approach client work. Everything just works!",
    title: "Design workflow made simple",
  },
  {
    id: 2,
    name: "Chloe Rivera",
    username: "@chloedev",
    platform: "instagram",
    icon: <FaInstagram className="text-pink-500" />,
    avatar: "/assets/woman-1.png",
    content:
      "From planning to publishing, it's seamless. It's the ultimate creative suite for digital creators.",
    title: "A creator’s dream come true",
  },
  {
    id: 3,
    name: "Nathan Chen",
    username: "@nathancode",
    platform: "linkedin",
    icon: <FaLinkedin className="text-blue-600" />,
    avatar: "/assets/man-2.png",
    content:
      "As a freelancer, speed matters. DesignCraft helped me deliver stunning UIs in record time.",
    title: "Speed meets creativity",
  },
  {
    id: 4,
    name: "Isla Monroe",
    username: "@islashots",
    platform: "facebook",
    icon: <FaFacebook className="text-blue-700" />,
    avatar: "/assets/woman-1.png",
    content:
      "The UI kits and component systems are so well-designed. I save hours every week using this.",
    title: "Visually stunning, functionally perfect",
  },
  {
    id: 5,
    name: "Arjun Mehta",
    username: "@arjun_yt",
    platform: "youtube",
    icon: <FaYoutube className="text-red-600" />,
    avatar: "/assets/man-3.png",
    content:
      "Content creation has never been this easy. Templates, assets, and responsive grids ready to go.",
    title: "Boost your content creation",
  },
  {
    id: 6,
    name: "Zoe Tanaka",
    username: "@zoe.tiktok",
    platform: "tiktok",
    icon: <FaTiktok className="text-black" />,
    avatar: "/assets/woman-3.png",
    content:
      "Highly customizable components and flexible themes make every brand project feel unique.",
    title: "Customization at its finest",
  },
];
