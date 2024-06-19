import React from "react";
import { Card } from "@/components/elements";
import { TbDevicesCode, TbEyeCog, TbBug } from "react-icons/tb";
import Image from "next/image";
import DesignIcon from "/public/image/svg/design.svg";
import BugIcon from "/public/image/svg/bug-hunting.svg";
import ResponsiveIcon from "/public/image/svg/responsive.svg";
import MockupIcon from "/public/image/svg/mockup.svg";

const data = [
  {
    id: 1,
    title: "Responsive",
    icon: ResponsiveIcon,
  },
  {
    id: 2,
    title: "Design to Code",
    icon: DesignIcon,
  },
  {
    id: 3,
    title: "Mockup",
    icon: MockupIcon,
  },
  {
    id: 4,
    title: "Bug Hunter",
    icon: BugIcon,
  },
];

const WhyMe = () => {
  return (
    <section className="mx-auto mb-8 flex max-w-[1600px] flex-col items-center p-4">
      <div className="">
        <p className="rounded-lg border px-5 py-2 text-center font-semibold">
          Why must choice me{" "}
        </p>
        <span className="dashed-line block w-full"></span>
      </div>

      <div className="grid w-full grid-cols-2 gap-12 rounded-lg border-t-2 border-dashed border-gray-300 py-4 phone:grid-cols-1 fullHd:grid-cols-4">
        {data.map((item, index) => (
          <Card
            key={item.id}
            variant="shadow"
            className="flex h-fit w-fit flex-row gap-2 gap-y-2.5 border-[0.5px] p-0 shadow-xl"
          >
            <Image
              src={item.icon}
              alt={"bug"}
              width={500}
              height={500}
              className="h-36 w-fit object-cover"
            />
            <div className="p-4">
              <p className="text-lg font-semibold text-primaryBlue">
                {item.title}
              </p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
export default WhyMe;
