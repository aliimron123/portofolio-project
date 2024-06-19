import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="relative mx-auto my-12 h-[400px] w-full max-w-[1600px] p-4 tablet:my-8">
      <div className="max-h-content flex h-fit flex-col gap-y-8">
        <h1 className="border-l-4 border-l-secondaryBlue px-2 text-xl font-semibold text-primaryBlue">
          Little Bit About Me
        </h1>
        <p className="ml-2 max-w-[400px] text-wrap text-4xl font-semibold text-primaryBlue">
          Better Person Better Experiences
        </p>
        <p className="ml-2 max-w-[650px] text-wrap text-justify text-base font-medium">
          {
            "Hey, I'm Imron Humaedi, my friend call me imron, and I lived in Garut, \
              West Java, Indonesia. Despite my background in Electrical Engineering, \
              my true passions are programming and design. I switched gears to \
              become a front-end developer since 2021, and I love the blend of tech \
              and creativity it offers. I'm pretty laid-back, adaptable, and I've \
              been known to sprinkle some humor into the mix. Learning is my thing & \
              I'm always eager to soak up new ideas and skills."
          }
        </p>
      </div>

      <div className="absolute right-0 top-[-23%] h-full">
        <Image
          src={"/image/png/young-man.png"}
          alt="image"
          width={600}
          height={600}
          className="object-fill"
          priority
        />
      </div>
    </section>
  );
};

export default About;
