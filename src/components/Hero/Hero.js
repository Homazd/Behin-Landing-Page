import * as React from "react";

function Hero() {
  return (
    <div className="pt-[56px] text-left">
      <div className="px-[15px] tablet:text-center">
        <p className="font-bold text-[24px] tablet:text-[38px] font-sans text-sky-500 mb-[24px]">
          BBDH
        </p>
        <div className="mb-[24px]">
          <p className="text-[12px] tablet:text-[16px] text-gray-500">
            Innovative Software and Hardware solutions for telecommunications
          </p>
        </div>
        <div className="tablet:flex tablet:justify-center">
          <div className="bg-sky-500 h-[50px] text-white text-md shadow-xl mb-[15px] rounded-lg font-semibold tablet:w-[225px] tablet:h-[50px] tablet:mx-[10px] tablet:my-0">
            <p className="text-[16px] py-[15px] px-[20px] b-1 text-center">
              Products
            </p>
          </div>
          <div className="bg-slate-50 text-sky-500 h-[54px] text-md mb-[15px] shadow-xl rounded-lg font-semibold border-2 border-sky-600 tablet:w-[225px] tablet:h-[50px] tablet:mx-[10px] tablet:my-0">
            <p className="text-[16px] py-[15px] px-[20px] b-1 text-center tablet:pt-[12px]">
              About us
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
