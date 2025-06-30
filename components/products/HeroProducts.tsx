import icons from "@/data/product";
import Image from "next/image";
const HeroProducts = () => {
  return (
    <div className="bg-gradient-to-b from-white bg-gray-100 pb-20 ">
      <div className="relative z-10 w-[90%] lg:w-[80%] xl:w-[75%] mx-auto text-center">
        <p className="text-sm font-medium text-indigo-500 mb-2">Product Page</p>
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          Unlock your product’s
          <span className="inline-block bg-indigo-100 text-indigo-600 px-3 py-1 rounded-xl ml-2">
            full potential
          </span>
        </h1>
        <p className="mt-4 max-w-xl mx-auto text-base text-gray-600">
          Explore how Higher’s smart tools and seamless design help you launch
          faster and grow smarter.
        </p>

        <div className="mt-16 flex flex-col lg:flex-row justify-center gap-10 items-center">
          {/* Feature Card */}
          <div className="bg-white shadow-md border border-gray-200 rounded-xl p-6 w-full max-w-md">
            <div className="grid grid-cols-4 gap-4 mb-5">
              {icons.map((Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 flex items-center justify-center border border-indigo-200 rounded-lg bg-indigo-50 text-indigo-500"
                >
                  <Icon className="w-5 h-5" />
                </div>
              ))}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Beautiful Design
            </h3>
            <p className="text-sm text-gray-600">
              Higher’s intuitive interface lets you manage your digital
              ecosystem effortlessly.
            </p>
          </div>

          {/* Content Card */}
          <div className="bg-white shadow-md border border-gray-200 rounded-xl p-6 w-full max-w-md space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-md font-medium text-gray-700">
                  Design Support
                </h4>
                <p className="text-sm text-gray-500">
                  Seamlessly integrate with modern tools and elevate your user
                  experience.
                </p>
              </div>
              <span className="text-sm font-medium px-3 py-1 rounded-full bg-indigo-100 text-indigo-600">
                Higher
              </span>
            </div>
            <div className="w-full overflow-hidden rounded-md border border-gray-100">
              <Image
                src="/assets/product.svg"
                alt="Project Timeline"
                width={200}
                height={200}
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroProducts;
