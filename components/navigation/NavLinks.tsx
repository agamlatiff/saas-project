"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BiLogInCircle, BiMenu } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import clsx from "clsx";

const navLinks = [
  { label: "Product", href: "/product" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
  { label:  <BiLogInCircle className="hidden md:block text-xl text-gray-500 hover:text-gray-800 transition" />, href: "/login" },
];

const NavLinks = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Desktop */}
      <nav className="hidden md:flex items-center gap-6">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className={clsx(
              "text-sm font-medium transition-colors",
              pathname === link.href
                ? "text-indigo-600"
                : "text-gray-500 hover:text-gray-800"
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Mobile Button */}
      <button onClick={toggleMenu} className="md:hidden text-2xl text-gray-500">
        {isOpen ? <GrClose /> : <BiMenu />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={closeMenu}
        >
          <nav
            className="absolute top-0 right-0 h-full w-64 bg-white shadow-lg p-6 flex flex-col gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end">
              <button onClick={closeMenu}>
                <GrClose className="text-xl text-gray-600" />
              </button>
            </div>

            {navLinks.map((link,index) => (
              <Link
                key={index}
                href={link.href}
                onClick={closeMenu}
                className={clsx(
                  "text-base font-semibold transition-colors",
                  pathname === link.href
                    ? "text-indigo-600"
                    : "text-gray-600 hover:text-gray-900"
                )}
              >
                {link.label}
              </Link>
            ))}

            <button className="mt-4 border border-gray-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-900 hover:text-white transition">
              <Link href={"/login"}>Sign In</Link>
            </button>
          </nav>
        </div>
      )}
    </>
  );
};

export default NavLinks;
