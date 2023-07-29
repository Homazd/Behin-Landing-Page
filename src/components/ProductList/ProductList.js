import * as React from "react";
import { Link } from "gatsby";
// Antd Components
import { Collapse } from "antd";
// Hooks
import { useState, useEffect } from "react";
// Assets
import { products } from "../Assets/Products";

const { Panel } = Collapse;

function ProductList() {
  const [isTablet, setisTablet] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setisTablet(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      {!isTablet && (
        <div className="mt-[77px] mx-[15px]">
          <h1 className="text-[22px] font-bold mb-[27px]">BBDH Product Line</h1>
          <Collapse>
            {products.map((element) => (
              <Panel
                className="bg-slate-100"
                header={element.header}
                key={element.id}
              >
                {element.groupSubs.map((item) => (
                  <p className="leading-loose underline text-gray-500 hover:no-underline hover:text-blue-400">
                    <Link to={item.link} key={item.id}>
                      {item.header}
                    </Link>
                  </p>
                ))}
              </Panel>
            ))}
          </Collapse>
        </div>
      )}
      {isTablet && (
        <div className="mt-[191px]  laptop:w-[984px] desktop:w-[1170px] mx-auto">
          <h1 className="text-[30px] font-bold font-sans mb-[66px] px-[20px]">
            BBDH Product Line
          </h1>
          <div className="grid grid-cols-2 gap-3 px-[20px] laptop:grid-cols-4">
            {products.map((item) => (
              <div className="mb-[30px]" key={item.id}>
                <p className="text-[18px] font-bold font-sans">{item.header}</p>
                {item.groupSubs.map((subItem) => (
                  <Link
                    className="text-[14px] underline text-slate-700 font-normal block hover:text-blue-400 hover:no-underline"
                    to={subItem.link}
                    key={subItem.id}
                  >
                    {subItem.header}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
export default ProductList;
