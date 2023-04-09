import React from "react";
import { Link } from "react-router-dom";

//images
import Logo from "../assests/images/logov1.png";

const Header = () => {
  return (
    <div className="bg-[#1d1e21] px-[25px] h-[56px] flex justify-between items-center">
      <div>
        <Link to="/">
          <img src={Logo} alt="logo" className="cursor-pointer" />
        </Link>
      </div>
      <div>
        <a className="text-[13px] text-white font-medium cursor-pointer">
          Sign in
        </a>
        <span className="text-white mx-[8px]">/</span>
        <a className="text-[13px] text-white font-medium cursor-pointer">
          Sign up
        </a>
      </div>
    </div>
  );
};

export default Header;
