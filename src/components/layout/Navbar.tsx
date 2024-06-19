import React, { useState, useEffect } from "react";
import Image from "next/image";
import MenuItem from "@/components/layout/partials/MenuItem";

const Navbar = () => {
  const [scrolling, setScrolling] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  return (
    <section
      className={
        scrolling
          ? "fixed top-0 z-30 flex w-full flex-row justify-between gap-x-8 bg-white px-16 py-4 phone:p-2.5 tablet:p-4 laptop:px-4"
          : "fixed top-0 z-30 flex w-full flex-row justify-between gap-x-8 px-16 py-4 phone:p-2.5 tablet:p-4 laptop:px-4"
      }
    >
      <div className="flex flex-row gap-x-1">
        <Image width={60} height={60} src={"/image/svg/logo.svg"} alt="logo" />
        <p className="my-auto text-base font-semibold uppercase">portofolio</p>
      </div>
      <div className="my-auto phone:hidden tablet:hidden laptop:hidden">
        <MenuItem isScrolling={scrolling} />
      </div>
    </section>
  );
};

export default Navbar;
