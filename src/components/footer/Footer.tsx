import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-4 z-50">
      <Link href="https://www.linkedin.com/in/lihuelzerega/" className="cursor-pointer">
          <p className="text-center font-bold text-transparent bg-gradient-to-r from-[#dc63e6] to-[#9964ec] bg-clip-text">
            Created by Lihuel Zerega
          </p>
      </Link>
    </div>
  );
};

export default Footer;
