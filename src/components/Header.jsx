"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

import { UserAuth } from "../app/context/AuthContext";

export default function Header() {
  const { user, googleSignIn, logOut } = UserAuth();

  // LOADING
  const [loading, setLoading] = useState(true);

  // HANDLE SIGNIN AND SIGNOUT
  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(user);

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
      checkAuthentication();
    };
  }, [user]);

  return (
    <header className="bg-slate-200 shadow-md z-20 fixed w-full">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link href="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap ">
            <span className="text-slate-500">Home</span>
            <span className="text-yellow-500">Realty</span>
          </h1>
        </Link>

        {/* NAVIGATION */}
        <ul className="flex gap-4 align-middle">
          <li className="hidden md:inline text-slate-700 hover:underline">
            <Link href="/">Home</Link>
          </li>

          <li className="hidden md:inline text-slate-700 cursor-pointer hover:underline">
            <Link href="/about">About</Link>
          </li>

          {!user ? (
            <ul className="flex gap-4 justify-between">
              <li
                className="hidden md:inline text-slate-700 cursor-pointer hover:underline"
                onClick={handleSignIn}
              >
                Sign In
              </li>
              <li
                className="hidden md:inline text-slate-700 hover:underline"
                onClick={handleSignIn}
              >
                Sign Up
              </li>
            </ul>
          ) : (
            <div className="flex gap-4 items-center ">
              <p className="text-slate-600 "> {user.email}</p>
              <p
                className="cursor-pointer text-slate-600"
                onClick={handleSignOut}
              >
                Sign Out
              </p>
            </div>
          )}
        </ul>
      </div>
    </header>
  );
}
