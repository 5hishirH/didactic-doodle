"use client";

import { FaHome } from "react-icons/fa";
import { IoCreateSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import { usePathname } from "next/navigation";


const Navbar = () => {
  const pathName = usePathname();
  const navLinks = [
    {
      name: "Home",
      path: "/",
      icon: <FaHome />,
    },
    {
      name: "Create Post",
      path: "/create-post",
      icon: <IoCreateSharp />,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: <CgProfile />,
    },
  ];
  return (
    <nav className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] fixed bottom-6 left-1/2 -translate-x-1/2 w-10/12 flex justify-evenly items-center text-2xl py-5 rounded-xl text-gray-400 bg-white">
      {navLinks?.map((e, i) => (
        <Link
          href={e.path}
          key={i}
          className={`${pathName === e.path ? "text-primary" : ""}`}
        >
          {e.icon}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
