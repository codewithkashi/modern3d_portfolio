import React from "react";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="flex w-full justify-between items-center px-16 py-4 bg-primary border-t-2 border-blue-900">
      <p className="text-gray-600 font-semibold">
        Copyright &copy; 2023 All rights reserved
      </p>
      <div className="flex space-x-4">
        <BsInstagram
          size={24}
          className="text-white hover:text-gray-600 hover:cursor-pointer"
          onClick={() =>
            window.open("https://instagram.com/codewithkashif", "_blank")
          }
        />

        <BsTwitter
          size={24}
          className="text-white hover:text-gray-600 hover:cursor-pointer"
          onClick={() =>
            window.open("https://twitter.com/codewithkashif", "_blank")
          }
        />

        <BsLinkedin
          size={24}
          className="text-white hover:text-gray-600 hover:cursor-pointer"
          onClick={() =>
            window.open("https://www.linkedin.com/in/codewithkashif", "_blank")
          }
        />

        <BsGithub
          size={24}
          className="text-white hover:text-gray-600 hover:cursor-pointer"
          onClick={() =>
            window.open("https://github.com/codewithkashi", "_blank")
          }
        />
      </div>
    </div>
  );
};

export default Footer;
