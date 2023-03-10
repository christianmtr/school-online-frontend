import React from "react";
import { Card, Row, Col } from "antd";
import Image from "next/image";
import Link from "next/link";

import IMG from "../public/images/pexels-curtis-adams-7167986.jpg";
import IMG2 from "../public/images/pexels-lisa-fotios-2090881.jpg";

const { Meta } = Card;

export default function Cards() {
  const items = [
    {"couse": "Mi primer curso", "description": "Mi primer curso", "image": IMG},
    {"couse": "Mi segnundo curso", "description": "Mi segundo curso", "image": IMG2},
    {"couse": "Mi tercer curso", "description": "Mi tercer curso", "image": IMG},
    {"couse": "Mi cuarto curso", "description": "Mi cuarto curso", "image": IMG2},
    {"couse": "Mi quinto curso", "description": "Mi quinto curso", "image": IMG},
    {"couse": "Mi sexto curso", "description": "Mi sexto curso", "image": IMG2},
    {"couse": "Mi septimo curso", "description": "Mi septimo curso", "image": IMG},
    {"couse": "Mi octavo curso", "description": "Mi octavo curso", "image": IMG2},
  ]
  return (
    <Row
      key={"cars-list"}
      gutter={26}
      align={"middle"}
      justify={"center"}
      wrap
      className="flex pt-12 pb-24 px-96"
    >
      {items.map((item) => (
        <Col span={6} className="pb-8">
          <Card
            bordered={false}
            actions={[<Link href="/course">{item.couse}</Link>]}
            cover={
              <Link href="/product">
                <Image src={item.image} alt="" className="h-72 object-cover" />
              </Link>
            }
          >
            <Meta title={item.couse} description="www.instagram.com" />
          </Card>
        </Col>
      ))}
    </Row>
  );
};
