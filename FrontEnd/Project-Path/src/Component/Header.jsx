import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import NavbarLogo from "../assets/Navbar-logo.png";

function Header() {
  return (
    <div>
      <div className="flex items-center justify-between container mx-auto lg:px-20 px-8 pb-4 pt-2 bg-[#F4F5F6] rounded-b-full">
        <div className="">
          <Link to="/">
            <img
              src={NavbarLogo}
              className="h-[50px] object-cover rounded-full"
            />
          </Link>
        </div>

        <div className="w-1/2 font-semibold text-lg lg:flex justify-evenly hidden">
          <Link
            smooth
            to="/#about"
            className="hover:underline hover:decoration-[#25DEC5] decoration-2 underline-offset-8"
          >
            About us
          </Link>
          <Link
            smooth
            to="/#features"
            className="hover:underline hover:decoration-[#25DEC5] decoration-2 underline-offset-8"
          >
            Features
          </Link>
          <Link
            smooth
            to="/#contact"
            className="hover:underline hover:decoration-[#25DEC5] decoration-2 underline-offset-8"
          >
            Contact us
          </Link>
        </div>

        {/* hidden when user signup */}
        <div className="font-bold text-base">
          <Link
            to="/signup"
            className="border border-black px-8 py-2 rounded-full hover:bg-[#25DEC5] hover:border-[#25DEC5] flex items-center hover:text-[#002933]"
          >
            Sign up
          </Link>
        </div>

        {/* show when user signup */}
        <div className="font-bold text-base">
          <Link
            to="/"
            className="border border-black px-8 py-2 rounded-full hover:bg-[#25DEC5] hover:border-[#25DEC5] flex items-center hover:text-[#002933]"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
