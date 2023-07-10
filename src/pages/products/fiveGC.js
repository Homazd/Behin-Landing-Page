import * as React from "react";
import { Link } from "gatsby";

// Components
import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
// Images
import productsImage from "../../images/product-header.png";
import fiveGC from "../../images/5GC-FieldProven.png";

const FiveGCPage = () => {
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
        <Link to="/products/5GC">5GC</Link>
      </p>
      <div className="w-[300px] tablet:w-[700px] laptop:w-[800px] desktop:w-[1100px] mx-auto mt-5 place-content-center grid tablet:grid-cols-2 gap-4">
        <div className="col-span-1 grid place-content-center">
          <h1 className="font-bold text-[14px] tablet:text-[18px] mt-6 laptop:text-[30px] p-2">
            5GC Core
          </h1>
          <span className="text-[12px] laptop:text-[14px] desktop:text-[18px] leading-loose">
            5G Core (5GC) is the core network architecture of 5G, It is a
            fundamental component that enables the advanced features and
            capabilities of 5G networks. The 5G Core network is designed to be
            more flexible, scalable, and efficient compared to previous
            generations. It incorporates key technologies like Network Function
            Virtualization (NFV), Software-Defined Networking (SDN), and Network
            Slicing to support diverse services, high data rates, low latency,
            and massive connectivity. The 5G Core network comprises several
            network functions, including the Access and Mobility Management
            Function (AMF), Session Management Function (SMF), User Plane
            Function (UPF), Network Slice Selection Function (NSSF), etc.
            which work together to provide enhanced connectivity and enable new
            use cases in the 5G ecosystem.
          </span>
        </div>
        <div className="col-span-1 grid place-content-center">
          <img
            className="w-[400px] h-auto border-solid border-4 border-sky-500"
            src={fiveGC}
            alt="5GC core"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default FiveGCPage;
