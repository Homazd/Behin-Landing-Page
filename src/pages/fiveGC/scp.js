import * as React from "react";
import { Link } from "gatsby";

// Components
import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
// Images
import productsImage from "../../images/product-header.png";

const SCPPage = () => {
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
        <Link to="/fiveGC/scp">SCP</Link>
      </p>
      <div className="w-[300px] tablet:w-[700px] laptop:w-[800px] desktop:w-[1200px] mx-auto mt-5 place-content-center">
        <div className="grid place-content-center">
          <h1 className="font-bold text-[23px] tablet:text-[18px] mt-6 laptop:text-[30px] desktop:text-[46px] text-blue-600 p-2">
           SCP
          </h1>
          <span className="text-[12px] laptop:text-[14px] desktop:text-[18px] leading-loose text-justify">
            SCP stands for Service Capability Exposure Function (SCEF)
            Capability Set Parameter. It is a parameter used in the 5G core
            network to indicate the capabilities of the Service Capability
            Exposure Function (SCEF) to external applications. The SCEF is
            responsible for exposing the capabilities of network services to
            external applications, such as third-party applications or Internet
            of Things (IoT) devices. The SCEF provides a standardized interface
            for external applications to access and utilize network services,
            such as location-based services, charging services, or network
            slicing. The SCP parameter is used to inform external applications
            about the specific capabilities of the SCEF. For example, the SCP
            parameter can indicate whether the SCEF supports location-based
            services or charging services, and what specific features are
            available for each service. This allows external applications to
            make informed decisions about which network services to utilize and
            how to best utilize them. The SCP parameter is typically
            communicated between the SCEF and external applications using the 5G
            Application Programming Interface (API), which provides a
            standardized interface for communication between network functions
            and external applications. In summary, the SCP parameter is an
            important component of the 5G core network that enables external
            applications to access and utilize network services through the
            Service Capability Exposure Function (SCEF). By providing
            information about the specific capabilities of the SCEF, the SCP
            parameter allows external applications to make informed decisions
            about how to best utilize network services.
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

export default SCPPage;
export const Head = () => <title>SCP</title>;
