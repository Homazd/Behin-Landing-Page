import * as React from "react";
// Components
import Contact from "./components/ContactFooter";

// import LazyBGImage from "./LazyBackgroundImage/LazyBGImage";

const products = [
  {
    header: "Solutions",
    groupSubs: [
      "For Mobile Operators",
      "For Fixed Line Operators",
      "For MVNO/IMS Solutions",
      "Smart City",
      "NGN/IMS Solutions",
    ],
  },
  {
    header: "Products",
    groupSubs: [
      "CS Core",
      "Intelligent Network & VAS",
      "Messaging",
      "NGN/IMS Equipment",
      "Roaming",
      "Customer Care",
    ],
  },
  {
    header: "Company",
    groupSubs: ["About Us", "Our Partners"],
  },
];

function Footer() {
  return (
    <>
      <footer className="mt-[85px] pt-[36px] bg-blue-900">
        <div className="grid tablet:grid-cols-2 gap-2  px-[15px] tablet:px-[30px] laptop:grid-cols-4 desktop:w-[1170px] desktop:mx-auto">
          {products.map((product) => (
            <div className="mt-[10px] leading-loose">
              <p className="text-[12px] tablet:text-[20px] text-white font-bold mb-[10px]">
                {product.header}
              </p>
              {product.groupSubs.map((item, index) => (
                <a
                  href="www.google.com"
                  className="block text-[12px] tablet:text-[14px] underline text-gray-400 font-normal"
                  key={index}
                >
                  {item}
                </a>
              ))}
            </div>
          ))}
          <Contact />
          <p className="mt-[50px] text-sm text-white">
            ©️BBDH, 2023. All rights reserved
          </p>
        </div>
      </footer>
    </>
  );
}
export default Footer;
