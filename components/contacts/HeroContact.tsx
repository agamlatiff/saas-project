// File: app/contact/page.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const HeroContact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    alert(`Terima kasih, ${formData.name}! Pesan Anda telah dikirim.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-gradient-to-b from-white to-gray-100 flex items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] max-w-screen-2xl -z-0">
        <Image
           src="/globe-background.svg"
           alt="Background Graphic"
           width={2000}
           height={500}
           className="opacity-10"
        />
      </div>
      <main className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 z-10">
        {/* Kolom Kiri: Informasi Kontak */}
        <div className="flex flex-col justify-center text-slate-800">
          <p className="font-semibold text-indigo-600">Higher Contact</p>
          <h1 className="text-4xl sm:text-5xl font-bold mt-2">Contact Sales</h1>
          <p className="mt-4 text-slate-600 max-w-md">
            Higher is more than just a SaaS and technology template—it&#39;s a complete digital transformation solution.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">How we can help:</h2>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-indigo-600" />
              <span className="text-slate-600">Add details about how to contact here</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-indigo-600" />
              <span className="text-slate-600">Share your contact information</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-indigo-600" />
              <span className="text-slate-600">Add details about how to contact here</span>
            </li>
          </ul>

          {/* Testimonial */}
          <div className="mt-12 pt-8 border-t border-slate-200">
             <div className="flex items-start gap-4">
                <Image
                    src="/fig-nelson.jpg"
                    alt="Fig Nelson"
                    width={56}
                    height={56}
                    className="rounded-full"
                />
                <div>
                    <blockquote className="text-slate-600 italic">
                        &quot;Higher has truly transformed our online presence. With its powerful analytics and seamless integration, we&#39;ve gained invaluable insights and improved our SEO ranking, resulting in significant business growth.&quot;
                    </blockquote>
                    <p className="font-bold text-slate-800 mt-4">Fig Nelson</p>
                    <p className="text-sm text-slate-500">CEO & Founder at Invoice2go</p>
                </div>
            </div>
            <div className="mt-6">
                <Image
                  src="/invoice2go-logo.svg"
                  alt="Invoice2go Logo"
                  width={120}
                  height={40}
                />
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Form */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold text-slate-800">Access the Higher Template:</h2>
            <form onSubmit={handleSubmit} className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Name"
                    required
                    className="w-full p-3 bg-slate-100 rounded-md border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    required
                    className="w-full p-3 bg-slate-100 rounded-md border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="How can we help?"
                  className="w-full p-3 bg-slate-100 rounded-md border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white font-bold p-4 rounded-md mt-6 hover:bg-indigo-700 transition-colors duration-300"
              >
                Sign Up
              </button>
              <p className="text-center text-xs text-slate-500 mt-4">
                Section can be added here (description or information)
              </p>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroContact;