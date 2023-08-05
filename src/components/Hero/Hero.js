import React from "react";
import { Link } from "gatsby";
import scrollTo from 'gatsby-plugin-smoothscroll';

import bg1 from "../../images/bg1.png";


function Hero() {
  return (
    <div
      className="pt-[70px] laptop:pt-[156px] bg-center bg-cover desktop:w-screen h-[400px] tablet:h-[350px] laptop:h-[500px] desktop:mx-auto desktop:rounded-lg"
      style={{ backgroundImage: `url(${bg1})` }}
    >
      <div className="px-[15px] tablet:text-center">
        <p className="font-bold text-center text-[26px] tablet:text-[38px] font-sans text-white mb-[24px]">
          SIZ-Tel
        </p>
        <div className="mb-[24px]">
          <p className="text-[14px] tablet:text-[18px] laptop:text-[20px] pt-[20px] text-gray-300">
            Innovative Software and Hardware solutions for telecommunications
          </p>
        </div>
        <div className="tablet:flex tablet:justify-center laptop:mt-[50px]">
          <div
          role="button"
            className="bg-blue-700 cursor-pointer h-[50px] text-white text-md hover:shadow-xl mb-[15px] rounded-lg font-semibold tablet:w-[225px] tablet:h-[50px] tablet:mx-[10px] tablet:my-0"
            onClick={() => scrollTo('#targetElement')}
          >
            <p className="text-[16px] py-[15px] px-[20px] b-1 text-center" b>
              Products
            </p>
          </div>
          <div className="bg-slate-50 cursor-pointer text-blue-900 hover:bg-blue-900 hover:text-white h-[54px] text-md mb-[15px] shadow-xl rounded-lg font-semibold border-2 border-sky-600 tablet:w-[225px] tablet:h-[50px] tablet:mx-[10px] tablet:my-0">
            <p className="text-[16px] py-[15px] px-[20px] b-1 text-center tablet:pt-[12px]">
              <Link to="/about">About us</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
