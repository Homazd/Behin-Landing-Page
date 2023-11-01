import React from "react";
import { Link } from "gatsby";
// Images
import aboutImage from "../../images/about.png";

function AboutProduct() {
  return (
    <div className="mt-[56px] tablet:grid tablet:grid-cols-2 tablet:gap-2 tablet:mt-[170px] desktop:w-[1170px] desktop:mx-auto">
      <div className="px-[15px]">
        <div className="mb-[20px]">
          <p className=" text-[18px] font-normal">
            <span className="text-blue-900 font-bold">
             SIZ-Tel/Behin Baygan Dade Hoonam{" "}
            </span>
            develops and provides innovative software and hardware solutions for
            telecommunication industry.
          </p>
        </div>
        <div className="grid grid-cols-2">
          <div className="col-span-1">
            <span className="text-[38px] font-bold mr-[10px] text-blue-900">
              2
            </span>
            <span className="text-xs ">Countries</span>
          </div>
          <div className="col-span-1 grid grid-cols-2">
            <span className="col-span-1 text-[38px] font-bold mr-[10px] text-blue-900">
              100000
            </span>
            <div className="relative">
              <span className="col-span-1 text-xs absolute bottom-0">
                Subscribers
              </span>
            </div>
          </div>
        </div>
        <div className="bg-blue-900 rounded-md flex justify-center h-[50px] mt-[20px] tablet:w-[225px] hover:shadow-lg hover:shadow-blue-900/40">
          <button className="text-slate-50 text-base font-semibold ">
            <Link to="/about">About us</Link>
          </button>
        </div>
      </div>
      <div className="mt-8 w-auto px-[15px] tablet:mt-0 tablet:order-first ">
        <img className="rounded-2xl" src={aboutImage} alt="Network and IOT" loading="lazy" />
      </div>
    </div>
  );
}
export default AboutProduct;
