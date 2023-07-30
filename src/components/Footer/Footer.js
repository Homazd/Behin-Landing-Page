import * as React from "react";
import { Link } from "gatsby";
// Components
import Contact from "./components/ContactFooter";
// Assets
const items = [
  {
    header: "Products",
    products: [
      { title: "Evolved Packet Core", id: 1, link: "/epc" },
      { title: "IP Multimedia Subsystem", id: 2, link: "/ims" },
      { title: "5G Core Network", id: 3, link: "/fiveGC" },
    ],
  },
];

function Footer() {
  return (
    <>
      <footer className="mt-[85px] pt-[36px] bg-blue-900">
        <div className="grid laptop:grid-cols-2 gap-2  px-[15px] tablet:px-[30px] laptop:w-[800px] desktop:w-[1200px] laptop:mx-auto">
          {items.map((item) => (
            <div className="mt-[10px] leading-loose text-center">
              <p className="text-[12px] tablet:text-[20px] text-white font-bold mb-[10px]">
                {item.header}
              </p>

              {item.products.map((item) => (
                <Link
                  to={item.link}
                  className="block text-[12px] tablet:text-[14px] underline text-gray-400 font-normal"
                  key={item.id}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
          <Contact />
        </div>
          <p className="mt-[50px] text-sm text-white text-center">
            ©️BBDH, 2023. All rights reserved
          </p>
      </footer>
    </>
  );
}
export default Footer;
