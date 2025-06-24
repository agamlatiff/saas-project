"use client";

import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { BiLogInCircle, BiMenu } from "react-icons/bi";
import { GrClose } from "react-icons/gr";

const navLinks = [
  { label: "Product", href: "/product" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
];

const NavLinks = () => {
  const router = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handlerIsOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      {/* Desktop Responsive */}
      <nav className="hidden gap-6 md:flex ">
        {navLinks.map((link) => (
          <Link
            onClick={handlerIsOpen}
            href={link.href}
            key={link.label}
            className={`text-base font-semibold hover:text-stone-900 ${clsx(
              link.href === router ? "text-stone-900" : "text-stone-400"
            )}`}
          >
            {link.label}
          </Link>
        ))}

        <button>
          <BiLogInCircle className="size-5 text-stone-400 hover:text-stone-800" />
        </button>
      </nav>
      <BiMenu
        onClick={handlerIsOpen}
        className="size-7 md:hidden text-stone-400 hover:text-stone-800"
      />

      {/* Mobile Responsive */}
      {isOpen && (
        <nav className="fixed right-0 top-0 flex flex-col w-1/2 h-screen bg-stone-200 gap-6 md:hidden items-center py-12  ">
          <GrClose
            className="size-6 text-stone-400 hover:text-stone-800"
            onClick={handlerIsOpen}
          />
          {navLinks.map((link) => (
            <Link
              href={link.href}
              key={link.label}
              className={`text-base font-semibold hover:text-stone-900 ${clsx(
                link.href === router ? "text-stone-900" : "text-stone-400"
              )}`}
            >
              <button onClick={handlerIsOpen}>{link.label}</button>
            </Link>
          ))}

          <button className="border py-1 px-6 rounded-full border-stone-800 hover:bg-stone-800 hover:text-white ">
            Sign In
          </button>
        </nav>
      )}
    </>
  );
};

export default NavLinks;
