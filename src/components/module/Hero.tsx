import React from "react";
import Image from "next/image";
import Sosmed from "../partial/Sosmed";
import { Button } from "../elements";
import { BsFileEarmarkArrowDown } from "react-icons/bs";
import Polygon from "./partials/Polygon";

const Hero = () => {
  return (
    <section className="h-[750px] w-full">
      <div className="relative h-full">
        <div className="absolute bottom-0 right-0 z-10 h-full w-fit fullHd:w-1/2">
          <Image
            src={"/image/png/hero.png"}
            alt="bg-hero"
            width={1300}
            height={500}
            priority
            className="h-full w-full object-fill"
          />
        </div>

        <div className="h-full">
          <Polygon />
        </div>

        <div className="absolute bottom-32 left-20 z-20">
          <div className="flex flex-col gap-4">
            <p className="text-xl font-medium">Hello there</p>
            <div className="flex flex-col gap-1">
              <p className="text-[32px] font-semibold leading-tight tracking-wider text-primaryBlue">
                Im, Imron Humaedi
              </p>
              <p className="text-[20px] font-semibold text-secondaryBlue">
                Front End Developer
              </p>
            </div>
            <p className="max-w-[500px] text-wrap font-medium text-gray-700">
              Proficient in building responsive and user-friendly web interfaces
              using modern frontend technology
            </p>
            <Button
              className="mt-8 h-14 w-fit border-secondaryBlue font-medium text-secondaryBlue"
              variant="bordered"
              animation="click"
              IconConmponents={() => (
                <BsFileEarmarkArrowDown className="h-4 w-4 text-secondaryBlue" />
              )}
            >
              Download CV
            </Button>
          </div>
        </div>

        {/* image in left section */}
        <div className="absolute bottom-0 right-14 z-20 tablet:right-14">
          <Image
            src={"/image/png/dummy-person.png"}
            alt="images"
            width={500}
            height={200}
            className="object-contain"
          />
        </div>
        <div className="absolute bottom-5 right-14 z-20 tablet:right-14">
          <Sosmed />
        </div>
      </div>
    </section>
  );
};

export default Hero;
