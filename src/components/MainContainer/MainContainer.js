import React from "react";

function MainContainer() {
  return (
    <div className="px-[15px] mt-[60px] tablet:grid tablet:grid-cols-2 tablet:gap-2">
      <div className="h-[380px] bg-gradient-to-t from-sky-400 to-sky-600 rounded-lg shadow-lg">
        <div className="font-sans pl-[20px] pt-[55px] ">
          <span className="text-[24px] font-bold text-slate-100">
            For Telecom Carriers
          </span>
          <ol className="list-inside list-disc text-slate-100 leading-loose mt-[20px]">
            <li className="underline">For Mobile Operators</li>
            <li className="underline">For Fixed Line Operators</li>
            <li className="underline">For MVNO/MVNE</li>
          </ol>
        </div>
      </div>
      <div className="h-[380px] bg-gradient-to-t from-fuchsia-400 to-fuchsia-600 mt-[30px] tablet:mt-0 rounded-lg">
        <div className="pl-[20px] pt-[55px]">
          <span className="font-sans text-[24px] font-bold text-slate-100 ">
            For Enterprises
          </span>
          <ol className="list-inside list-disc text-slate-100 leading-loose mt-[20px]">
            <li className="underline">NGN/IMS Solutions</li>
            <li className="underline">Call Center</li>
            <li className="underline">Enterprise UC solutions</li>
          </ol>
        </div>
      </div>
      <div className="h-[380px] bg-gradient-to-t from-indigo-400 to-indigo-600 mt-[30px] tablet:mt-0 rounded-lg">
        <div className="pl-[20px] pt-[55px]">
          <span className="font-sans text-[24px] font-bold text-slate-100 ">
            For Integrated Safety
          </span>
          <ol className="list-inside list-disc text-slate-100 leading-loose mt-[20px]">
            <li className="underline">
              112/911 Emergency Services Response System
            </li>
            <li className="underline">Smart City</li>
            <li className="underline">Public Warning Alert</li>
            <li className="underline">Cell Broadcast Center</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
export default MainContainer;
