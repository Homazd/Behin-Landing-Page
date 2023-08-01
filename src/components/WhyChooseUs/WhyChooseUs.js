import * as React from "react";
// Images
import activation from "../../images/activation.png";
import NWFeature from "../../images/NWFeature.png";
import siteDeploy from "../../images/siteDeploy.png";
import subscriberRatio from "../../images/SubscriberRatio.png";

function WhyChooseUs() {
  return (
    <div className="px-[5px] mt-[47px] desktop:mt-[98px]">
      <h1 className="text-[23px] laptop:text-[33px] desktop:text-[46px] font-semibold text-center">Why Choose SIZ-Tel</h1>
      <span className="block text-center text-[14px] laptop:text-[18px] desktop:text-[22px] text-gray-500">
        New Way to operate
      </span>
      <div className="tablet:grid tablet:grid-cols-2 tablet:gap-0 tablet:place-content-center laptop:gap-y-5 desktop:grid-cols-6 desktop:pt-[50px]">
        <div className="mt-[25px] h-[120px] grid justify-items-center animate__animated animate__bounceInLeft desktop:col-start-2">
          <img
            className="w-[60px] h-[50px]"
            src={activation}
            alt="Customer Activation"
          />
          <p className="text-[14px] laptop:text-[18px] text-gray-600">Customer Activation</p>
          <p className="font-bold text-cyan-500 laptop:text-[18px]">1 Mins</p>
          <p className="text-[14px] laptop:text-[18px] text-gray-600">instead of 3 hours</p>
        </div>
        <div className="mt-[25px] h-[120px]  grid justify-items-center animate__animated animate__bounceInRight">
          <img
            className="w-[60px] h-[50px]"
            src={siteDeploy}
            alt="Customer Activation"
          />
          <p className="text-[14px] laptop:text-[18px] text-gray-600">Cell Site deployment</p>
          <p className="font-bold text-cyan-500 laptop:text-[18px]">4 Mins (for 5G) / </p>
          <p className="font-bold text-cyan-500 laptop:text-[18px]">8.5 Mins (for 4G) </p>
          <p className="text-[14px] laptop:text-[18px] text-gray-600">instead of days or months</p>
        </div>
        <div className="mt-[40px] h-[120px] desktop:mt-[25px] grid justify-items-center animate__animated animate__bounceInLeft">
          <img
            className="w-[60px] h-[50px]"
            src={NWFeature}
            alt="Customer Activation"
          />
          <p className="text-[14px] laptop:text-[18px] text-gray-600">New NW Feature Deployed</p>
          <p className="font-bold text-cyan-500 laptop:text-[18px]">6 Days</p>
          <p className="text-[14px] laptop:text-[18px] text-gray-600">instead of 6 Months</p>
        </div>
        <div className="mt-[30px] tablet:mt-[40px] desktop:mt-[25px] h-[120px] grid justify-items-center animate__animated animate__bounceInRight">
          <img
            className="w-[90px] h-[50px]"
            src={subscriberRatio}
            alt="Customer Activation"
          />
          <p className="text-[14px] laptop:text-[18px] text-gray-600">Engineer: Subscriber Ratio</p>
          <p className="font-bold text-cyan-500 laptop:text-[18px]">1:20,000</p>
          <p className="text-[14px] laptop:text-[18px] text-gray-600">instead of 1:1,000</p>
        </div>
      </div>
    </div>
  );
}
export default WhyChooseUs;
