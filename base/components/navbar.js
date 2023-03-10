import React from "react";
import Link from "next/link";

export default function navbar() {
  return (
    <nav>
      <div className="flex items-center justify-between space-x-20 my-6 px-24">
        <div className="z-30">
          imagen
        </div>
        <div className="hidden items-center space-x-10 uppercase text-grayishBlue md:flex">
          <a href="#features" className="tracking-widest hover:text-softRed">
            Features
          </a>
          <a href="#faq" className="tracking-widest hover:text-softRed">
            FAQ
          </a>
          <Link
            href="/login"
            className="px-8 py-2 text-white bg-green-500 border-2 border-green-500 rounded-lg shadow-md hover:text-green-500 hover:bg-white"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};
