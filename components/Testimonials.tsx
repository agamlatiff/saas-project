import { testimonials } from "@/data/testimonials";
import Title from "./elements/Title";
import Image from "next/image";
import Link from "next/link";

const Testimonials = () => {
  return (
    <section className="relative bg-gray-100 py-20">
      <div className="container mx-auto px-6 lg:px-10 text-center">
        {/* Title */}
        <Title
          description="Our Customers"
          title="See what our"
          subtitle="customers are saying"
          isChildren={false}
        />

        {/* Cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-left">
          {testimonials.map(({ id, name, username, platform, icon, avatar, content }) => (
            <div
              key={id}
              className="flex flex-col justify-between bg-white p-6 rounded-xl shadow-sm ring-1 ring-gray-200 hover:shadow-md transition"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Incredibly useful product
                </h3>
                <p className="text-sm text-gray-600">{content}</p>
              </div>

              <div className="flex items-center justify-between mt-6">
                {/* Avatar & Info */}
                <div className="flex items-center gap-4">
                  <Image
                    src={avatar}
                    alt={platform}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div className="space-y-0.5">
                    <h4 className="text-sm font-medium text-gray-900">{name}</h4>
                    <p className="text-xs text-indigo-600">{username}</p>
                  </div>
                </div>

                {/* Icon Button */}
                <Link
                  href="/"
                  className="text-xl text-indigo-600 hover:text-indigo-700 transition ring-1 ring-gray-200 p-2 rounded-full"
                  aria-label={`Visit ${platform}`}
                >
                  {icon}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Button CTA */}
        <div className="mt-12">
          <button className="px-6 py-3 rounded-full bg-indigo-600 text-white font-medium text-base hover:bg-indigo-700 transition">
            Follow us on Social Media
          </button>
        </div>
      </div>

    </section>
  );
};

export default Testimonials;
