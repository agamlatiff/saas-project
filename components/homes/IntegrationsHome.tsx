import React from "react";
import Title from "../elements/Title";
import { iconsIntegrations } from "@/data/integrations";
import { FaCloud } from "react-icons/fa";

export default function IntegrationsHome() {

  return (
    <section className="relative bg-white py-32 overflow-hidden grid">
      <div className="relative w-full max-w-6xl mx-auto grid grid-cols-3 lg:grid-cols-4 gap-8 place-items-center z-10 order-2">
        {iconsIntegrations.map((item) => (
          <div
            key={item.id}
            className="w-14 h-14 bg-white rounded-full shadow flex items-center justify-center hover:scale-110 transition "
          >
            {item.icon}
          </div>
        ))}
        <div className="col-span-full flex justify-center mt-10">
          <div className="w-20 h-20 bg-violet-100 rounded-full shadow flex items-center justify-center">
            <FaCloud className="text-3xl text-violet-600" />
          </div>
        </div>
      </div>

      <div className="text-center mb-20 px-4 max-w-2xl mx-auto z-10 relative order-1">
        <Title
          description="Our Primary Integrations"
          title="Make productivity easier"
          subtitle="with "
          color="50+ Integrations"
          information=" Gain a competitive edge with our SEO optimization tools, ensuring your
          website ranks higher, attracts more visitors, and generates leads like never
          before."
          isChildren={false}
        />

        <button className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-800 transition">
          See Integrations →
        </button>
      </div>
    </section>
  );
}
