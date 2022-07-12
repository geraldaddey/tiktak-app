import React from "react";
import { useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import { GoogleLogin } from "@react-oauth/google";
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";

const Sidebar = () => {
  const [showSideBar, setShowSideBar] = useState(true);
  return (
    <div>
      <div className="block xl:hidden m-2 ml-4 mt-3 text-xl"></div>

      {showSideBar ? (
        <ImCancelCircle
          onClick={() => {
            setShowSideBar((prev) => !prev);
          }}
        />
      ) : (
        <AiOutlineMenu />
      )}
      <div>
        {showSideBar && (
          <div className="xl:w-400 w-20 flex flex-col justify-start mb-10 border-r-2 border-gray-100 xl:border-0 p-3">
            <div className="xl:border-b-2 border-gray-200 xl:pb-4">
              <Link href="/">
                <div>
                  <p className="text-2xl">
                    <AiFillHome />
                  </p>
                  <span>For You</span>
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
