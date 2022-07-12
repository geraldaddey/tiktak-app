import React from "react";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineLogout } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import { GoogleLogin, googleLogout } from "@react-oauth/google";

import Logo from "../utils/tiktak-logo-2.png";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4">
      <Link href="/">
        <div className="flex-row flex items-center last:border h-8 w-8">
          <Image
            className="cursor-pointer"
            alt="TikTak"
            src={Logo}
            layout="responsive"
          ></Image>
          <p className="ml-10">TikTak</p>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
