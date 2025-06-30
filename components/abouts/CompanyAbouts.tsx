import { SiBoost } from "react-icons/si";
import Title from "../elements/Title";
import { GiGrowth } from "react-icons/gi";
import Image from "next/image";

interface Company {
  icon: React.ReactElement;
  title: string;
  description: string;
  button: string;
  image: string;
}

const company: Company[] = [
  {
    icon: <SiBoost/>,
    title: 'Customer Focus',
    description: "Stellar is the game-changer you've been waiting for in the world of SaaS and technology. Gain unparalleled insights into your data with our robust analytics suite.",
    button: 'Start Journey',
    image: '/assets/person-1.png'
  },
    {
    icon: <GiGrowth/>,
    title: 'Always be Growing',
    description: "Uncover hidden patterns, track user behavior, and make data-driven decisions to propel your business forward. Optimized for SEO, Stellar ensures your website stands out",
    button: 'Start Journey',
    image: '/assets/person-2.png'
  },
]


const CompanyAbouts = () => {
  return <section className="py-20 px-10 mx-auto w-full bg-gray-100">
    <div className="container mx-auto w-full text-center flex flex-col items-center">
      <Title description="Powerful Features" title="Our Company's Values" information="Our Innovative SaaS template empowers businesses to stay ahead in the digital landscape" isChildren={false}/>
      <div className="flex items-center gap-5 flex-col mx-auto w-full">
        {company.map((item,index) => (
          <div key={index} className="flex items-center justify-between ">
            <div className={`flex items-center flex-col bg-white w-full p-10 rounded-md flex-3 ${index === 0 ? 'order-1 gap-4' : 'order-2 gap-4 relative left-0 md:left-10  '}`}>
              <div className="flex items-center gap-3  ">
                <span className="p-4 rounded-full ring-1 ring-stone-200">{item.icon}</span>
                <h1 className="text-xl text-stone-800">{item.title}</h1>
              </div>
              <p className="max-w-2xl text-stone-700 text-md text-medium my-4">{item.description}</p>
              <button className="p-4 rounded-full ring-1 ring-stone-200 text-black ">{item.button}</button>
            </div>
            <div className={`w-full mx-auto rounded-lg flex-1 md:block hidden ${index === 0 ? 'order-2 gap-4' : 'order-1 gap-4'}`}>
              <Image width={300} height={300} src={item.image} alt="about image" className="md:size-[300px] object-cover aspect-square md:rounded-lg ml-5"/>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
};

export default CompanyAbouts;
