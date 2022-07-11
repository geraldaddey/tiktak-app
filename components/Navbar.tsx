import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineLogout } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import { GoogleLogin, googleLogout } from "@react-oauth/google";

const Navbar = () => {
  return (
    <div>
      <Link>
        <div>
          <Image></Image>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
