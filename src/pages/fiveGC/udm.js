import * as React from "react";
import { Link } from "gatsby";

// Components
import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
// Images
import productsImage from "../../images/product-header.png";

const NRFPage = () => {
  return (
    <>
      <Header />
      <Navigation />
      <div
        className="max-w-screen w-80 h-52 bg-center bg-cover tablet:w-screen tablet:h-80"
        style={{ backgroundImage: `url(${productsImage})` }}
      >
        Products
      </div>
      <p className="text-gray-500 text-[14px] desktop:text-[20px] underline mt-[20px] pl-[15px] laptop:pl-[30px] desktop:w-[1200px] desktop:mx-auto">
        <Link to="/">Home</Link> / <Link to="/products/">Products</Link> /{" "}
        <Link to="/products/volte">VoLTE</Link>
      </p>
      <div className="w-[300px] tablet:w-[700px] laptop:w-[800px] desktop:w-[1200px] mx-auto mt-5 place-content-center">
        <div className="grid place-content-center">
          <h1 className="font-bold text-[23px] tablet:text-[18px] mt-6 laptop:text-[30px] desktop:text-[46px] text-blue-600 p-2">
            NF Repository Function
          </h1>
          <span className="text-[12px] laptop:text-[14px] desktop:text-[18px] leading-loose text-justify">
            In the context of 5G core, NRF stands for Network Repository
            Function. It is a network function that provides information about
            the network topology, network functions, and other network-related
            information to other network functions in the 5G core network. The
            NRF acts as a central repository for network information and
            provides a standardized interface for network functions to query and
            discover information about other network functions. It enables
            dynamic service discovery and network function selection based on
            the requirements of a particular service or application. The NRF is
            responsible for maintaining and updating the information in the
            Network Repository Database (NRD), which contains information about
            network functions, their capabilities, and their associated
            resources. The NRD is a distributed database that is shared between
            NRF instances in different network slices and across different
            administrative domains. In summary, the NRF plays a crucial role in
            enabling the dynamic and flexible nature of the 5G core network by
            providing a centralized repository for network information and
            enabling network functions to discover and select other network
            functions based on their capabilities and requirements.
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

export default NRFPage;
export const Head = () => <title>NRF</title>;
