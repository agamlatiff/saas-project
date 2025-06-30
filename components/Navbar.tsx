"use client";

import Link from "next/link";
import NavLinks from "./navigation/NavLinks";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="fixed top-6 left-0 right-0 z-50">
      <div className="mx-auto w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] 3xl:w-[70%] bg-white rounded-3xl shadow-md px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image src="/assets/logo.svg" alt="logo" width={30} height={30} />
            <h1 className="font-bold text-xl md:text-2xl text-gray-900">
              Higher
            </h1>
          </Link>

          {/* Navigation */}
          <NavLinks />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
