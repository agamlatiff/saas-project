import Image from "next/image";
import Title from "../elements/Title";

const HeroHome = () => {
  return (
    <div className="mx-auto h-screen w-full p-0 ">
      <div className="mx-auto container text-center px-10 ">
        <div className="*:mx-auto">
          <Title
            title="The Future of Software"
            description="Introducing Higher"
            subtitle="Starts with"
            information="Higher is the next-generation SaaS platform designed to scale with
            your business. Experience seamless innovation, powerful tools, and a
            user-first design."
            isChildren={true}
          >
            Higher
          </Title>

          <Image
            src={"/assets/hero.png"}
            alt={"hero"}
            width={600}
            height={600}
            className="mx-auto my-10"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
