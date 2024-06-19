import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Sosmed = () => {
  return (
    <div className="flex flex-row gap-x-4">
      <FaInstagram className="h-5 w-5 text-white" />
      <FaLinkedin className="h-5 w-5 text-white" />
      <FaGithub className="h-5 w-5 text-white" />
      <SiGmail className="h-5 w-5 text-white" />
    </div>
  );
};

export default Sosmed;
