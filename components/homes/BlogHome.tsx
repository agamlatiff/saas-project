import React from "react";
import Image from "next/image";
import { Blog } from "@/types/blog";
import { blog } from "@/data/blogs";

export default function BlogHome() {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto text-center">
      <p className="text-sm font-medium text-indigo-500 mb-2">Our Blog</p>
      <h2 className="text-4xl font-bold mb-4">Blog & Articles</h2>
      <p className="text-gray-500 max-w-2xl mx-auto mb-16">
        Unlock the power of data analytics and gain actionable insights to make
        informed business decisions. Enhance your website&aposs visibility
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blog.map((article: Blog) => (
          <div key={article.title} className="text-left">
            <div className="rounded-xl overflow-hidden mb-4">
              <Image
                src={article.image}
                alt={article.title}
                width={400}
                height={250}
                className="w-full object-cover size-70"
              />
            </div>
            <div className="flex space-x-2 text-sm text-gray-400 mb-1">
              {article.tags.map((tag : string) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {article.title}
            </h3>
            <p className="text-gray-500 text-sm mb-4">{article.description}</p>
            <button className="text-sm font-medium text-indigo-600 flex items-center hover:underline">
              Read More <span className="ml-1">↳</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
