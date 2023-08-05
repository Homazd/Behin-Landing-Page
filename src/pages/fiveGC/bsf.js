import * as React from "react";
import { Link } from "gatsby";

// Components
import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
// Images
import productsImage from "../../images/product-header.png";

const BSFPage = () => {
  return (
    <>
      <Header />
      <Navigation />
      <div
        className="h-52 bg-center bg-cover w-screen tablet:h-80"
        style={{ backgroundImage: `url(${productsImage})` }}
      >
        5GC
      </div>
      <p className="text-gray-500 text-[14px] desktop:text-[20px] underline mt-[20px] pl-[15px] laptop:pl-[30px] desktop:w-[1200px] desktop:mx-auto">
        <Link to="/">Home</Link> / <Link to="/fiveGC/">5GC</Link> /{" "}
        <Link to="/fiveGC/bsf">BSF</Link>
      </p>
      <div className="w-[300px] tablet:w-[700px] laptop:w-[800px] desktop:w-[1200px] mx-auto mt-5 place-content-center">
        <div className="grid place-content-center">
          <h1 className="font-bold text-[23px] tablet:text-[18px] mt-6 laptop:text-[30px] desktop:text-[46px] text-blue-600 p-2">
            Binding Support Function (BSF)
          </h1>
          <span className="text-[12px] laptop:text-[14px] desktop:text-[18px] leading-loose text-justify">
            The Binding Support Function (BSF) is a functional entity in 5G
            mobile networks that is responsible for providing authentication and
            authorization services to network functions that require access to
            user subscription information. The BSF is used in the 5G core
            network architecture and is typically located in the home subscriber
            server (HSS). The BSF plays a key role in ensuring that only
            authorized network functions are able to access user subscription
            information, such as user identity, authentication credentials, and
            service entitlements. It provides authentication and authorization
            services by verifying the identity of the network function
            requesting access to user subscription information and verifying
            that it is authorized to access that information. The BSF
            communicates with other network functions, such as the access and
            mobility management function (AMF) and the user data repository
            (UDR), to provide authentication and authorization services. It also
            plays a role in managing security keys and certificates used for
            authentication and encryption in the network. Overall, the BSF is a
            critical component of the 5G core network architecture, responsible
            for ensuring the security and integrity of user subscription
            information and enabling authorized network functions to access that
            information when needed.
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

export default BSFPage;
export const Head = () => <title>BSF</title>;
