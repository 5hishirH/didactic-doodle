"use client";

import { CgProfile } from "react-icons/cg";
import { FaCirclePlus } from "react-icons/fa6";
import { FiPlusCircle } from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import useAuthContext from "@/utils/AuthProvider";

const Navbar = () => {
  const pathName = usePathname();
  const { user, loading } = useAuthContext();

  return (
    <nav
      className={`flex justify-between items-center shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] fixed left-0 top-0 w-full bg-white p-4 ${
        pathName === "/login" ? "hidden" : ""
      }`}
    >
      <Link href={"/"} className="flex items-center gap-3">
        <Image src={"/icons8-blog-64.png"} alt="logo" height={34} width={34} />
      </Link>
      <div className="flex items-center gap-2">
        <Link href={"/create-post"} className="font-normal">
          <FiPlusCircle className="text-3xl" />
        </Link>
        {!loading ? (
          user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-8 rounded-full">
                  <Image
                    src={user?.photoURL}
                    alt="pic"
                    height={34}
                    width={34}
                    className="rounded-full"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link href={"/profile"} className="justify-between">
                    Profile
                  </Link>
                </li>
                <li>
                  <span>Logout</span>
                </li>
              </ul>
            </div>
          ) : (
            <CgProfile className="text-3xl" />
          )
        ) : (
          <span className="loading loading-spinner text-secondary"></span>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
