import * as React from "react";
import { Link } from "gatsby";

// Components
import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
// Images
import productsImage from "../../images/product-header.png";

const NSSFPage = () => {
  return (
    <>
      <Header />
      <Navigation />
      <div
        className="max-w-screen w-80 h-52 bg-center bg-cover tablet:w-screen tablet:h-80"
        style={{ backgroundImage: `url(${productsImage})` }}
      >
        5GC
      </div>
      <p className="text-gray-500 text-[14px] desktop:text-[20px] underline mt-[20px] pl-[15px] laptop:pl-[30px] desktop:w-[1200px] desktop:mx-auto">
        <Link to="/">Home</Link> / <Link to="/fiveGC/">5GC</Link> /{" "}
        <Link to="/fiveGC/nssf">NSSF</Link>
      </p>
      <div className="w-[300px] tablet:w-[700px] laptop:w-[800px] desktop:w-[1200px] mx-auto mt-5 place-content-center">
        <div className="grid place-content-center">
          <h1 className="font-bold text-[23px] tablet:text-[18px] mt-6 laptop:text-[30px] desktop:text-[46px] text-blue-600 p-2">
           Network Slice Selection Function (NSSF)
          </h1>
          <span className="text-[12px] laptop:text-[14px] desktop:text-[18px] leading-loose text-justify">
            The Network Slice Selection Function (NSSF) is a functional entity
            in 5G mobile networks that is responsible for selecting and
            assigning network slices to mobile devices. A network slice is a
            logical network that provides a specific set of network capabilities
            and resources to a user or group of users. The NSSF is responsible
            for selecting the appropriate network slice based on the user's
            requirements, network conditions, and available resources. It
            receives input from other network functions, such as the policy
            control function (PCF), the access and mobility management function
            (AMF), and the network slice subnet management function (NSSMF), to
            make these decisions. The NSSF also plays a role in the ongoing
            management and optimization of network slices. It monitors network
            conditions and user requirements to ensure that network slices are
            providing the appropriate level of service and adjusts network
            slices as needed to meet changing requirements. Overall, the NSSF
            plays a critical role in enabling the flexible and efficient use of
            network resources in 5G mobile networks by providing an automated
            and dynamic mechanism for selecting and managing network slices
            based on user requirements and network conditions.
          </span>
        </div>
        {/* <div className="content-center mt-14 flex justify-center animate__animated animate__fadeInUpBig">
          <img className="w-auto h-[400px]" src={imsCore} alt="5GC core" />
        </div> */}
      </div>
      <Footer />
    </>
  );
};

export default NSSFPage;
export const Head = () => <title>NSSF</title>;
