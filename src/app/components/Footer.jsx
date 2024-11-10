import React from "react";
import Image from "next/image";
import Logo from "../../../public/images/logo.png";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>
          <Image
            src={Logo}
            alt="Logo image"
            width={50}
            height={50}
            className="h-8 w-auto md:h-10 filter invert"
          />
        </span>
        <p className="text-slate-600">all rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
