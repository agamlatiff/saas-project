import Link from "next/link";
import NavLinks from "./navigation/NavLinks";
import { AiOutlineGlobal } from "react-icons/ai";
const Navbar = () => {
  return (
    <div className="bg-white w-[90%] lg:w-[80%] xl:w-[75%] 3xl:w-[70%] mx-auto fixed left-0 right-0 top-10 overflow-hidden rounded-4xl py-2 px-4 z-100">
      <div className="flex items-center justify-between gap-6 py-4 px-8 md:px-10 lg:px-12 xl:px-14 3xl:px-16 rounded-4xl shadow ">
        <Link href={"/"} className="flex items-center gap-2">
          <AiOutlineGlobal className="size-7 text-indigo-600"/>
          <h1 className="font-semibold text-xl">Frontier</h1>
        </Link>
        <NavLinks />
      </div>
    </div>
  );
};

export default Navbar;
