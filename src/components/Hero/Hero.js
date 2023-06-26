import * as React from "react";
import wave from "../../images/wave.png";

function Hero() {
  return (
    <div
      className="pt-[56px] bg-center bg-cover desktop:w-[1170px] desktop:mx-auto desktop:rounded-lg"
      // style={{ backgroundImage: `url(${wave})` }}
    >
      <div className="px-[15px] tablet:text-center">
        <p className="font-bold text-center text-[26px] tablet:text-[38px] font-sans text-blue-900 mb-[24px]">
          BBDH
        </p>
        <div className="mb-[24px]">
          <p className="text-[14px] tablet:text-[18px] laptop:text-[20px] pt-[20px] font-bold text-gray-500">
            Innovative Software and Hardware solutions for telecommunications
          </p>
        </div>
        <div className="tablet:flex tablet:justify-center">
          <div className="bg-blue-900 h-[50px] text-white text-md hover:shadow-xl mb-[15px] rounded-lg font-semibold tablet:w-[225px] tablet:h-[50px] tablet:mx-[10px] tablet:my-0">
            <p className="text-[16px] py-[15px] px-[20px] b-1 text-center">
              Products
            </p>
          </div>
          <div className="bg-slate-50 text-blue-900 hover:bg-blue-900 hover:text-white h-[54px] text-md mb-[15px] shadow-xl rounded-lg font-semibold border-2 border-sky-600 tablet:w-[225px] tablet:h-[50px] tablet:mx-[10px] tablet:my-0">
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
