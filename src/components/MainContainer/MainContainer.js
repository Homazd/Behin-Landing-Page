import React from "react";
// Images
import epc from "../../images/EPC.webp";
import ims from "../../images/ims.webp";
import fiveG from "../../images/5g.webp";
// Hooks
import { useState, useEffect } from "react";

function MainContainer() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1440);
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1440);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="px-[15px] mt-[47px] tablet:text-center">
      <h1 className="text-center text-[23px] desktop:text-[46px] font-bold">
        Core Network Products
      </h1>
      <div className="desktop:w-[1200px] mx-auto desktop:px-[220px]">
      <span className="text-[12px] desktop:text-[22px] mt-[10px] text-gray-500">
        As a Prominent Core Network Provider, BBDH is commited to delivering the
        highly customizable Core Network and best customer experience.
      </span>
      </div>
      <div className="desktop:w-[1170px] mx-auto desktop:grid desktop:grid-cols-3 gap-0">
      <div className="desktop:col-span-1 w-[226px] h-[293px] mx-auto tablet:w-[531px] tablet:h-[297px] desktop:w-[361px] desktop:h-[352px] rounded-md animate__animated animate__bounceInLeft shadow-xl bg-slate-10 mt-[28px] grid justify-items-center pt-[46px] px-[26px]">
        <img
          src={epc}
          className="w-[67px] h-[61px] tablet:w-[133px] tablet:h-[120px] self-center"
        />
        <span className="block font-semibold text-[15px]">
          Evolved Packet Core(EPC)
        </span>
        <span className="text-[12px] text-gray-500">
          High scalable 4G LTE EPC Core Network platform, Easy to deploy for a
          wide range of application
        </span>
        <button className="cursor-pointer text-[12px]">Learn More</button>
      </div>
      <div className="desktop:col-span-1 w-[226px] h-[293px] tablet:w-[531px] tablet:h-[297px] desktop:w-[361px] desktop:h-[352px] animate__animated animate__bounce mx-auto rounded-md shadow-xl bg-slate-10 mt-[28px] grid justify-items-center pt-[46px] px-[26px]">
        <img
          src={ims}
          className="w-[67px] h-[61px] self-center tablet:w-[133px] tablet:h-[120px]"
        />
        <span className="block font-semibold text-[15px]">
          IP Multimedia Subsystem
        </span>
        <span className="text-[12px] text-gray-500">
          An agile and virtualized session vIMS core, support variety of voice
          applications such as VoLTE, ...
        </span>
        <button className="cursor-pointer text-[12px]">Learn More</button>
      </div>
      <div className="desktop:col-span-1 w-[226px] h-[293px] tablet:w-[531px] tablet:h-[297px] desktop:w-[361px] desktop:h-[352px] mx-auto animate__animated animate__bounceInRight rounded-md shadow-xl bg-slate-10 mt-[28px] grid justify-items-center pt-[46px] px-[26px]">
        <img
          src={fiveG}
          className="w-[67px] h-[61px] self-center tablet:w-[133px] tablet:h-[120px]"
        />
        <span className="block font-semibold text-[15px]">
          5G Core Network(5GC)
        </span>
        <span className="text-[12px] text-gray-500">
          Cloud-native, Highly integrated and Simplified design 5GC for mobile
          industry
        </span>
        <button className="cursor-pointer text-[12px]">Learn More</button>
      </div>
      </div>
    </div>
  );
}
export default MainContainer;
