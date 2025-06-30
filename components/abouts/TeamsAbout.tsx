import { FaFacebook, FaInstagram, FaTwitch, FaTwitter } from "react-icons/fa";
import Title from "../elements/Title";

interface Teams {
  name: string;
  position: string;
  socials: React.ReactElement[];
  icon: string;
}

const teams: Teams[] = [
  {
    name: "Leon S Kennedy",
    position: "Machine Learning Engineer",
    socials: [
      <FaFacebook key="facebook" />,
      <FaInstagram key="instagram" />,
      <FaTwitch key="twitch" />,
      <FaTwitter key="twitter" />
    ],
    icon: "/assets/team-1.png",
  },
  {
    name: "Albert Wesker",
    position: "Lead Software Engineer",
    socials: [
      <FaFacebook key="facebook" />,
      <FaInstagram key="instagram" />,
      <FaTwitch key="twitch" />,
      <FaTwitter key="twitter" />
    ],
    icon: "/assets/team-2.png",
  },
  {
    name: "Claire Redfield",
    position: "Lead Mobile Engineer",
    socials: [
      <FaFacebook key="facebook" />,
      <FaInstagram key="instagram" />,
      <FaTwitch key="twitch" />,
      <FaTwitter key="twitter" />
    ],
    icon: "/assets/person-3.png",
  },
  {
    name: "Piers Nivans",
    position: "Fullstack Web Developer",
    socials: [
      <FaFacebook key="facebook" />,
      <FaInstagram key="instagram" />,
      <FaTwitch key="twitch" />,
      <FaTwitter key="twitter" />
    ],
    icon: "/assets/person-4.png",
  },
  {
    name: "Ada Wong",
    position: "Lead UI/UX Designer",
    socials: [
      <FaFacebook key="facebook" />,
      <FaInstagram key="instagram" />,
      <FaTwitch key="twitch" />,
      <FaTwitter key="twitter" />
    ],
    icon: "/assets/person-5.png",
  },
  {
    name: "Ethan Winters",
    position: "Product Designer",
    socials: [
      <FaFacebook key="facebook" />,
      <FaInstagram key="instagram" />,
      <FaTwitch key="twitch" />,
      <FaTwitter key="twitter" />
    ],
    icon: "/assets/person-6.png",
  },
];

const TeamsAbout = () => {
  return <div className="w-full mx-auto overflow-hidden py-20 px-10">
    <div className="flex items-center justify-between gap-52 mb-8">
      <Title description="Our Team" title="Higher, Team" isChildren={false}/>
      <p className="text-stone-700 max-w-lg text-lg">Uncover hidden patterns, track user behavior, and make data-driven decisions to propel your business forward.</p>
    </div>
    
    <div className="grid grid=cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {teams.map((item, index) => (
        <div key={index} className="bg-gray-100 p-10 rounded-md flex items-center justify-between">
          <div className="flex flex-col items-center justify-between">
            <div>
              <h2 className="font-semibold text-xl">{item.name}</h2>
            </div>
          </div>
        </div>
      ))} 
    </div>
  </div>;
};

export default TeamsAbout;
