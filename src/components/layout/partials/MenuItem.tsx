import React from "react";
import { HiLanguage } from "react-icons/hi2";

interface Iprops {
  isScrolling: boolean;
}

const MenuItem: React.FC<Iprops> = ({ isScrolling }) => {
  return (
    <ul
      className={
        isScrolling
          ? "flex flex-row gap-x-8 font-medium text-primaryBlue"
          : "flex flex-row gap-x-8 font-medium text-white"
      }
    >
      <li>About Me</li>
      <li>My Portofolio</li>
      <li>Contact</li>
      <li className="flex flex-row gap-x-0.5">
        Eng <HiLanguage className="my-auto h-6 w-6" />
      </li>
    </ul>
  );
};

export default MenuItem;
