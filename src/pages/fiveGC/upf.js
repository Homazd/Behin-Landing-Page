import * as React from "react";
import { Link } from "gatsby";

// Components
import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
// Images
import productsImage from "../../images/product-header.png";

const UPFPage = () => {
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
        <Link to="/fiveGC/upf">UPF</Link>
      </p>
      <div className="w-[300px] tablet:w-[700px] laptop:w-[800px] desktop:w-[1200px] mx-auto mt-5 place-content-center">
        <div className="grid place-content-center">
          <h1 className="font-bold text-[23px] tablet:text-[18px] mt-6 laptop:text-[30px] desktop:text-[46px] text-blue-600 p-2">
          UPF
          </h1>
          <span className="text-[12px] laptop:text-[14px] desktop:text-[18px] leading-loose text-justify">
            In the context of 5G core, UPF stands for User Plane Function. The
            UPF is a network function that is responsible for handling the user
            data plane in the 5G core network. The UPF performs several key
            functions, including:
            <div className="mt-2">
              <ol className="list-decimal list-inside">
                <li className="mb-4">
                  Packet routing: The UPF receives user data packets from the
                  SMF (Session Management Function) and routes them to the
                  appropriate destination, based on the destination IP address
                  and other factors.
                </li>
                <li className="mb-4">
                  Quality of Service (QoS) management: The UPF manages the QoS
                  of user data packets, ensuring that they are delivered with
                  the appropriate priority and latency. This includes applying
                  policies for traffic shaping, packet marking, and other
                  QoS-related functions.
                </li>
                <li className="mb-4">
                  Traffic inspection: The UPF inspects user data packets to
                  ensure that they conform to network policies and security
                  requirements. This includes checking for viruses, spam, and
                  other forms of malicious traffic.
                </li>
                <li className="mb-4">
                  User data plane function: The UPF provides a range of user
                  data plane functions, including protocol translation, packet
                  filtering, and traffic optimization.
                </li>
              </ol>
            </div>
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

export default UPFPage;
export const Head = () => <title>UPF</title>;
