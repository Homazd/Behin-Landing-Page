import React from "react";

function AboutProduct() {
  return (
    <div className="mt-[56px]">
      <div className="px-[15px]">
        <div className="mb-[20px]">
          <p className="font-sans text-[18px] font-normal">
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
            <span className="text-xs font-sans">Countries</span>
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
        <div className="bg-sky-500 rounded-md flex justify-center h-[50px] mt-[20px]">
          <button className="text-slate-50 text-base font-semibold">About us</button>
        </div>
      </div>
    </div>
  );
}
export default AboutProduct;
