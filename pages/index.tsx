import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineLogout } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import { GoogleLogin, googleLogout } from "@react-oauth/google";

const Home: NextPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Nicely Setup. getting the bag real soon. More on the way
      </h1>
      <p> Finally fixed everyhting with Sanity. Lost my sanity too.</p>
    </div>
  );
};

export default Home;
