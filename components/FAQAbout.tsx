"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import Title from "./elements/Title"; // Sesuaikan dengan komponen judul kamu

const faqs = [
  {
    question: "What is Higher?",
    answer:
      "Higher is a modern SaaS platform that helps startups and freelancers build products faster with a lightweight, elegant, and developer-friendly stack.",
  },
  {
    question: "Do I need a credit card to get started?",
    answer: "No. You can get started right away without a credit card and try it for free for 7 days.",
  },
  {
    question: "Can it be used for teams?",
    answer: "Yes, Higher is designed to be flexible for both individuals and small B2B startup teams.",
  },
  {
    question: "What are the main features offered by Higher?",
    answer:
      "Higher provides features such as ready-to-use authentication, database management, one-click deployment, and integration with various popular tools.",
  },
  {
    question: "What is the pricing model after the free trial?",
    answer:
      "We offer several flexible subscription plans, from a free plan for small projects to paid plans with more complete features for growing startups. Details can be seen on our pricing page.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="bg-white py-24 relative">
      <div className="w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] mx-auto text-center">
        <Title
          description="FAQ Higher"
          title="Frequently Asked"
          subtitle="Questions"
          isChildren={false}
        />

        <div className="mt-10 space-y-4 max-w-2xl mx-auto relative z-10">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left hover:bg-gray-50 transition"
              >
                <span className="text-base font-medium text-gray-800">{faq.question}</span>
                <FiChevronDown
                  className={`text-xl text-indigo-500 transform transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`px-6 pb-4 text-gray-600 text-sm transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-20 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>

        {/* Background shape (opsional) */}
        <div className="absolute inset-0 flex justify-center z-0 pointer-events-none">
          <div className="w-64 h-64 bg-indigo-100/20 rounded-full blur-3xl mt-20" />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
