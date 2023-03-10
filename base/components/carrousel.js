import React from "react";
import { Carousel } from "antd";
import Image from "next/image";

import IMG1 from "../public/images/pexels-curtis-adams-7167986.jpg";
import IMG2 from "../public/images/pexels-lisa-fotios-2090881.jpg";
import IMG3 from "../public/images/pexels-max-vakhtbovych-6585764.jpg";
import IMG4 from "../public/images/pexels-tristan-paolo-4276607.jpg";

export default function carousel() {
  return (
    <Carousel autoplay>
      <div>
        <Image src={IMG1} alt="" className="h-80 object-cover" />
      </div>
      <div>
        <Image src={IMG2} alt="" className="h-80 object-cover" />
      </div>
      <div>
        <Image src={IMG3} alt="" className="h-80 object-cover" />
      </div>
      <div>
        <Image src={IMG4} alt="" className="h-80 object-cover" />
      </div>
    </Carousel>
  );
};
