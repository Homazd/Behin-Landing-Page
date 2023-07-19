import * as React from "react";
import { Link } from "gatsby";
// Antd Components
import { Button } from "antd";
// Images
import fiveGImage from "../../images/fiveG.webp";

function Build5G() {
  return (
    <div
      className="mt-[30px] tablet:mt-[47px] desktop:mt-[120px] bg-center bg-cover h-72 desktop:h-96"
      style={{ backgroundImage: `url(${fiveGImage})` }}
    >
      <div className="pt-[30px] px-4 tablet:px-28 laptop:px-36 desktop:px-56 desktop:pt-28">
        <h1 className="text-white laptop:text-[18px] desktop:text-[30px] font-bold">
          Build your 5G network with 5GC
        </h1>
        <p className="text-white text-[14px] tablet:text-[16px] desktop:text-[22px] pt-3">
          Our 5GC enables diverse 5G services for Operators, Service Providers,
          System Integrators and Enterprises, supporting EPC and 5GC
          convergence.
        </p>
        <Link to="/fiveGC/">
          <Button className="text-white font-semibold mt-3 desktop:font-bold desktop:h-12 desktop:text-[20px]">
            Learn More
          </Button>
        </Link>
      </div>
    </div>
  );
}
export default Build5G;
