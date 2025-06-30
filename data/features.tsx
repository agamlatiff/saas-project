import { Feature } from "@/types/feature";
import { BsPalette, BsCodeSlash, BsSliders } from "react-icons/bs"; // Ganti sesuai icon yang relevan

export const featuresProducts: Feature[] = [
  {
    image: "/assets/feature-1.svg",
    icon: <BsPalette />, // 🎨 Beautiful Design
    title: "Beautiful Design",
    description:
      "Stand out with sleek, modern UI that enhances user experience and brand trust.",
  },
  {
    image: "/assets/feature-2.svg",
    icon: <BsCodeSlash />, // 💻 Clean Development
    title: "Clean Development",
    description:
      "Built with clean, scalable code—ready to grow with your business.",
  },
  {
    image: "/assets/feature-3.svg",
    icon: <BsSliders />, // ⚙️ Easily Customised
    title: "Easily Customised",
    description:
      "From content to performance, tailor every detail to match your unique needs.",
  },
];