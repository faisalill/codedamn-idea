import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsFillLightningFill } from "react-icons/bs";
const Navbar = () => {
  return (
    <div className="bg-[#18181b] flex gap-4 place-items-center p-3">
      <img src="/logo.webp" alt="logo" className="h-7 w-7" />
      <a
        className=" flex place-items-center gap-2 text-xs inline-block rounded-md border border-gray-500 bg-transparent px-4 py-3 text-sm font-medium text-white hover:bg-opacity-20 hover:bg-white focus:outline-none focus:ring active:text-indigo-500"
        href="#"
      >
        <AiFillStar  />
        Rate Course
      </a>
      <a
        className=" flex place-items-center gap-2 text-xs inline-block rounded border border-indigo-600 bg-indigo-600 px-4 py-3 text-sm font-medium text-white hover:bg-indigo-700  focus:outline-none focus:ring active:text-indigo-500"
        href="/download"
      >
        <BsFillLightningFill />
        Instant Help
      </a>
    </div>
  );
};

export default Navbar;
