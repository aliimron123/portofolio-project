import React from "react";
import Image from "next/image";
const Polygon = () => {
  return (
    <div className="h-full">
      <Image
        width={300}
        height={300}
        src={"./image/svg/Polygon.svg"}
        alt=""
        className="absolute bottom-0 left-[30%] -z-10 h-32 w-32 origin-top-left rotate-45"
      />
      <Image
        width={300}
        height={300}
        src={"./image/svg/Polygon.svg"}
        alt=""
        className="top-92 absolute left-[30%] -z-10 h-16 w-16 origin-center rotate-90"
      />

      <Image
        width={300}
        height={300}
        src={"./image/svg/Polygon.svg"}
        alt=""
        className="absolute left-[40%] top-72 -z-10 h-16 w-16 origin-center rotate-12"
      />
    </div>
  );
};

export default Polygon;
