// File: components/CTAContact.tsx

import type { FC, ReactElement } from 'react';
// Pastikan Anda sudah menginstal react-icons: npm install react-icons
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

// Definisikan tipe untuk setiap item kontak
interface ContactDetail {
  icon: ReactElement;
  title: string;
  detail: string;
}

// Data untuk kartu kontak, bisa diubah sesuai kebutuhan
const contactDetails: ContactDetail[] = [
  {
    icon: <FiMail size={24} className="text-indigo-600" />,
    title: 'Email Kami',
    detail: 'hello@yourcompany.com',
  },
  {
    icon: <FiPhone size={24} className="text-indigo-600" />,
    title: 'Hubungi Kami',
    detail: '(+62) 812 3456 7890',
  },
  {
    icon: <FiMapPin size={24} className="text-indigo-600" />,
    title: 'Lokasi Kami',
    detail: 'Jl. Inovasi No. 1, Jakarta, Indonesia',
  },
];

// Komponen utama yang menampilkan semua kartu kontak
const CTAContact: FC = () => {
  return (
    <section className="bg-gray-50 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {contactDetails.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center p-8 bg-white rounded-xl shadow-md transition-shadow hover:shadow-lg w-full"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-4 bg-indigo-100 rounded-full">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
              <p className="mt-1 text-gray-500">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTAContact;