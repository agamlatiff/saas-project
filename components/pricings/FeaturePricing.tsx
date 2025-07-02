import Title from "../elements/Title";

const FeaturePricing = () => {
  return (
    <section className="py-20 px-10 overflow-hidden mx-auto w-full">
      <div className="flex items-center justify-between gap-20 container mx-auto w-full">
        <div className="flex flex-col gap-4 items-center w-full">
          <Title isChildren={false} description="Feature Section" title="See which is the best price plan for you"/>
          <p className="text-md text-stone-600 max-w-lg">With its intuitive interface and powerful features, Higher empowers businesses to leverage technology for growth and efficiency.</p>
        </div>
        <div>
          
        </div>
      </div>
    </section>
  );
};

export default FeaturePricing;
