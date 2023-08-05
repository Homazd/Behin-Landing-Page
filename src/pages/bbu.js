import * as React from "react";
import { Link } from "gatsby";

// Components
import Navigation from "../components/Navigation/Navigation";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
// Images
import bbuImage from "../images/bbu-image.png";
import productsImage from "../images/product-header.png";

const data = [
  { id: 1, title: "LTE Release 14" },
  { id: 2, title: "2G/4G Supported" },
  { id: 3, title: "SISO & MIMO 2\u00D72" },
  {
    id: 4,
    title:
      "Maxixmum Throughput 75 Mbps (SISO) for one sector",
  },
  {
    id: 5,
    title:
      "Maxixmum Throughput 150 Mbps (MIMO) for one sector",
  },
  { id: 6, title: "Maximum Throughput 450 Mbps (3\u00D7sectors)" },
  {
    id: 7,
    title: "CS-Fallback enabled, 4G-to-4G and 4G-to-2G voice call and SMS",
  },
  { id: 8, title: "SRVCC & VoLTE" },
  { id: 9, title: "4G Internet" },
  { id: 10, title: "CPRI @ fronthaul Interface" },
  { id: 11, title: "Monitoring Software" },
  { id: 12, title: "USSD over 4G" },
  { id: 13, title: "256 concurrent users and 1000 users totally" },
  { id: 14, title: "cell-re-selection in cells and sectors" },
  { id: 15, title: "CQI and PMI" },
  {
    id: 16,
    title: "3\u00D74G sectors and 3\u00D72G sectors supported (MIMO mode)",
  },
  { id: 17, title: "Industrial RRU supported (ALCATEL, BENETEL)" },
  { id: 18, title: "Full Software-based" },
  { id: 19, title: "Inter-RAT and Inter cell Handover" },
  { id: 20, title: "AEC, 3Gsnow and A5 Algorithms supported" },
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
        <Link to="/">Home</Link> /<Link to="/bbu">BBU</Link>
      </p>
      <div className="w-[300px] tablet:w-[730px] laptop:w-[900px] desktop:w-[1300px] mx-auto mt-5 place-content-center">
        <div className="grid place-content-center">
          <h1 className="font-bold text-[14px] tablet:text-[18px] mt-6 laptop:text-[30px]">
            BaseBanc Unit (BBU){" "}
          </h1>
          <ul className="list-disc list-inside grid tablet:grid-cols-2 tablet:h-[600px] tablet:w-[700px] laptop:w-[900px] desktop:w-[1300px] mt-8">
            {data.map((item) => (
              <>
                <li
                  key={item.id}
                  className="col-span-1 p-1 text-gray-700 text-[10px] tablet:text-[12px] font-normal laptop:text-[14px] desktop:text-[18px]"
                >
                  {item.title}
                </li>
              </>
            ))}
          </ul>
        </div>
        <div className="grid place-content-center mt-[45px]">
          <img
            className="w-[550px] laptop:w-[700px] desktop:w-[900px]  h-auto"
            src={bbuImage}
            alt="BBU"
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BBUPage;
