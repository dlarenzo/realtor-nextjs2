"use client";
import Link from "next/link";

import { UserAuth } from "../app/context/AuthContext";

export default function Header() {
  const { user } = UserAuth();

  console.log(user);
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
        <ul className="flex gap-4">
          <Link href="/">
            <li className="hidden md:inline text-slate-700 hover:underline">
              Home
            </li>
          </Link>
          <Link href="/about">
            <li className="hidden md:inline text-slate-700 hover:underline">
              About
            </li>
          </Link>

          <Link href="/sign-in">
            <li className="hidden md:inline text-slate-700 hover:underline">
              Sign In
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
