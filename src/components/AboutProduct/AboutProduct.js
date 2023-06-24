import React from "react";
import SIEM from "../../images/SIEM-1.png";

function AboutProduct() {
  return (
    <div className="mt-[56px] tablet:grid tablet:grid-cols-2 tablet:gap-2 tablet:mt-[170px] desktop:w-[1170px] desktop:mx-auto" >
      <div className="px-[15px]">
        <div className="mb-[20px]">
          <p className=" text-[18px] font-normal">
            <span className="text-sky-500 font-bold">
              BBDH/Behin Baygan Dade Hoonam{" "}
            </span>
            develops and provides innovative software and hardware solutions for
            telecommunication industry.
          </p>
        </div>
        <div className="grid grid-cols-2">
          <div className="col-span-1">
            <span className="text-[38px] font-bold mr-[10px] text-sky-500">
              2
            </span>
            <span className="text-xs ">Countries</span>
          </div>
          <div className="col-span-1 grid grid-cols-2">
            <span className="col-span-1 text-[38px] font-bold mr-[10px] text-sky-500">
              250
            </span>
            <div className="relative">
              <span className="col-span-1 text-xs absolute bottom-0">
                mln Subscribers
              </span>
            </div>
          </div>
        </div>
        <div className="bg-sky-500 rounded-md flex justify-center h-[50px] mt-[20px] tablet:w-[225px]">
          <button className="text-slate-50 text-base font-semibold">About us</button>
        </div>
        </div>
        <div className="mt-8 px-[15px] tablet:mt-0 tablet:order-first">
          <img src={SIEM} alt="SIEM Functions" />
        </div>
      
    </div>
  );
}
export default AboutProduct;
