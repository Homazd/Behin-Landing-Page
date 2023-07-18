import * as React from "react";
import { Link } from "gatsby";

// Components
import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
// Images
import imsImage from "../../images/ims-header.webp";

const SGWCPage = () => {
  return (
    <>
      <Header />
      <Navigation />
      <div
        className="max-w-screen w-80 h-52 bg-center bg-cover tablet:w-screen tablet:h-80"
        style={{ backgroundImage: `url(${imsImage})` }}
      >
        IMS
      </div>
      <p className="text-gray-500 text-[14px] desktop:text-[20px] underline mt-[20px] pl-[15px] laptop:pl-[30px] desktop:w-[1200px] desktop:mx-auto">
        <Link to="/">Home</Link> / <Link to="/ims/">IMS</Link> /{" "}
        <Link to="/ims/sgwc">SGW-c</Link>
      </p>
      <div className="w-[300px] tablet:w-[700px] laptop:w-[800px] desktop:w-[1200px] mx-auto mt-5 place-content-center">
        <div className="grid place-content-center">
          <h1 className="font-bold text-[23px] tablet:text-[18px] mt-6 laptop:text-[30px] desktop:text-[46px] text-blue-600 p-2">
            Serving Gateway Control Plane (SGW-c)
          </h1>
          <span className="text-[12px] laptop:text-[14px] desktop:text-[18px] leading-loose text-justify">
            The SGW-C controls the functionality performed by the assigned SGW-U
            when control and user plane separation is in place. A subscriber is
            served by a single SGW-C, and can have multiple SGW-Us selected for
            multiple PDN connections. When the subscriber moves around the
            E-UTRAN, under control of a SGW-C their point of attachment to the
            EPC remains fixed at the SGW-U (unless the network decides that a
            SGW-U relocation is required). Additional responsibilities include
            lawful interception of subscriber traffic, as well as triggering
            downlink data buffering whilst the subscriber is paged and PGW pause
            of charging management based on implemented policies (failed paging,
            abnormal radio link release and dropped packets/bytes at SGW-U).
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

export default SGWCPage;
export const Head = () => <title>SGW-c</title>;
