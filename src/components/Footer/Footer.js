import * as React from "react";
import { Link } from "gatsby";
// Components
import Contact from "./components/ContactFooter";
// Assets
import { products } from "../Assets/Products";

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

              {product.groupSubs.map((item) => (
                <Link
                  to={item.link}
                  className="block text-[12px] tablet:text-[14px] underline text-gray-400 font-normal"
                  key={item.id}
                >
                  {item.header}
                </Link>
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
