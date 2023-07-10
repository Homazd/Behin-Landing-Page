import * as React from "react";
import { Link } from "gatsby";

// Components
import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
// Images
import bbuImage from "../../images/bbu.png";
import productsImage from "../../images/product-header.png";

const data = [
  "LTE Release 14",
  "2G/4G Supported",
  `SISO & MIMO 2 \u00D7 2`,
  "Maxixmum Throughput 75 Mbps (SISO) and 150 Mbps (MIMO) for one sector",
  `Maximum Throughput 450 Mbps (3 \u00D7 sectors)`,
  "CS-Fallback enabled, 4G-to-4G and 4G-to-2G voice call and SMS",
  "SRVCC & VoLTE",
  "4G Internet",
  "CPRI @ fronthaul Interface",
  "Monitoring Software",
  "USSD over 4G",
  "256 concurrent users and 1000 users totally",
  "cell-re-selection in cells and sectors",
  "CQI and PMI",
  `3 \u00D7 4G sectors and 3 \u00D7 2G sectors supported (MIMO mode)`,
  "Industrial RRU supported (ALCATEL, BENETEL)",
  "Full Software-based",
  "Inter-RAT and Inter cell Handover",
  "AEC, 3Gsnow and A5 Algorithms supported",
];

const BBUPage = () => {
  return (
    <>
      <Header />
      <Navigation />
      <div
        className="max-w-screen h-52 bg-center bg-cover tablet:w-screen tablet:h-80"
        style={{ backgroundImage: `url(${productsImage})` }}
      >
        Products
      </div>
      <p className="text-gray-500 text-[14px] desktop:text-[20px] underline mt-[20px] pl-[15px] laptop:pl-[30px] desktop:w-[1200px] desktop:mx-auto">
        <Link to="/">Home</Link> / <Link to="/products/">Products</Link> /{" "}
        <Link to="/products/bbu">BBU</Link>
      </p>
      <div className="w-[300px] tablet:w-[700px] laptop:w-[800px] desktop:w-[1200px] mx-auto mt-5 place-content-center grid tablet:grid-cols-2 gap-4">
        <div className="col-span-1 grid place-content-center">
          <h1 className="font-bold text-[14px] tablet:text-[18px] mt-6 laptop:text-[30px]">
            BaseBanc Unit (BBU){" "}
          </h1>
          <ul className="list-disc list-inside">
            {data.map((item, index) => (
              <>
                <li
                  key={index}
                  className="p-1 mt-1 laptop:mt-3 text-gray-700 text-[10px] tablet:text-[12px] font-normal laptop:text-[18px]"
                >
                  {item}
                </li>
              </>
            ))}
          </ul>
        </div>
        <div className="col-span-1 grid place-content-center">
          <img className="w-[550px] h-auto border-solid border-4 border-sky-500" src={bbuImage} alt="BBU" />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BBUPage;
