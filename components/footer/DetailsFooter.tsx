import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function DetailsFooter() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-24 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-4 text-xl font-semibold text-gray-900">
              <Image src={"/assets/logo.svg"} alt="logo" width={30} height={30}/>
              <span>Higher</span>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Experience the Higher difference and unlock the true potential
            </p>
          </div>

          {/* Link Groups */}
          <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
            <div>
              <p className="text-gray-700 font-medium mb-2">Stellar Page</p>
              <ul className="space-y-1 text-gray-500">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Pricing</a></li>
              </ul>
            </div>

            <div>
              <p className="text-gray-700 font-medium mb-2">Product</p>
              <ul className="space-y-1 text-gray-500">
                <li><a href="#">Contact</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Product</a></li>
              </ul>
            </div>

            <div>
              <p className="text-gray-700 font-medium mb-2">Resources</p>
              <ul className="space-y-1 text-gray-500">
                <li><a href="#">Integration</a></li>
                <li><a href="#">Integration Detail</a></li>
                <li><a href="#">Sign Up</a></li>
              </ul>
            </div>

            <div>
              <p className="text-gray-700 font-medium mb-2">Company</p>
              <ul className="space-y-1 text-gray-500">
                <li><a href="#">Login</a></li>
                <li><a href="#">404</a></li>
                <li><a href="#">More Templates</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>©2025 Higher. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            {[FaFacebookF, FaTwitter, FaInstagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-indigo-50 hover:text-indigo-600 transition"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
