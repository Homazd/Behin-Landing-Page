import React from "react";
import backgroundImage from "../../images/bts.png";

function MainContainer() {
  return (
    <div className="px-[15px] mt-[60px]  desktop:px-0 desktop:mx-auto">
      <div className="tablet:grid tablet:grid-cols-2 tablet:gap-1 tablet:place-content-center  laptop:w-[984px] laptop:gap-2 laptop:mx-auto desktop:w-[1170px] ">
        <div className="animate__animated animate__slideInDown tablet:col-span-1 h-[380px] relative bg-gradient-to-t from-sky-400 to-sky-600 rounded-lg shadow-lg tablet:w-[369px] laptop:w-[476px] laptop:mr-[30px] desktop:w-[569px]">
          <div className="pl-[20px] pt-[55px]">
            <span className="text-[24px] font-bold text-slate-100">
              For Telecom Carriers
            </span>
            <ol className="list-inside list-disc text-slate-100 leading-loose mt-[20px]">
              <li className="underline hover:no-underline">For Mobile Operators</li>
              <li className="underline hover:no-underline">For Fixed Line Operators</li>
              <li className="underline hover:no-underline">For MVNO/MVNE</li>
            </ol>
          </div>
          <img
            src={backgroundImage}
            alt="Operator"
            className="h-[180px] w-[85px] tablet:w-[110px] tablet:h-[220px] laptop:w-[140px] laptop:h-[280px]  absolute bottom-0 right-0 pr-[20px]"
          />
        </div>
        <div className="animate__animated animate__slideInDown tablet:col-span-1 h-[380px] bg-gradient-to-t from-violet-400 to-violet-600 mt-[30px] tablet:mt-0 rounded-lg tablet:w-[369px] laptop:w-[476px] desktop:w-[569px]">
          <div className="pl-[20px] pt-[55px]">
            <span className="text-[24px] font-bold text-slate-100 ">
              For Enterprises
            </span>
            <ol className="list-inside list-disc text-slate-100 leading-loose mt-[20px] ">
              <li className="underline hover:no-underline">NGN/IMS Solutions</li>
              <li className="underline hover:no-underline">Call Center</li>
              <li className="underline hover:no-underline">Enterprise UC solutions</li>
            </ol>
          </div>
        </div>
        <div className="animate__animated animate__fadeInUp animate__delay-1s h-[380px] bg-gradient-to-t from-indigo-400 to-indigo-600 mobile:mt-[30px] tablet:mt-0 rounded-lg tablet:w-[369px] laptop:w-[476px] desktop:w-[569px]">
          <div className="pl-[20px] pt-[55px]">
            <span className="text-[24px] font-bold text-slate-100 ">
              For Integrated Safety
            </span>
            <ol className="list-inside list-disc text-slate-100 leading-loose mt-[20px]">
              <li className="underline">
                112/911 Emergency Services Response System
              </li>
              <li className="underline hover:no-underline">Smart City</li>
              <li className="underline hover:no-underline">Public Warning Alert</li>
              <li className="underline hover:no-underline">Cell Broadcast Center</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainContainer;
