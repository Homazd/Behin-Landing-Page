import * as React from "react";
import { Link } from "gatsby";

// Components
import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
// Images
import productsImage from "../../images/product-header.png";
import imsCore from "../../images/ims-core.webp";

const IMSCorePage = () => {
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
        <Link to="/products/imscore">IMS Core</Link>
      </p>
      <div className="w-[300px] tablet:w-[700px] laptop:w-[800px] desktop:w-[1200px] mx-auto mt-5 place-content-center">
        <div className="grid place-content-center">
          <h1 className="font-bold text-[23px] tablet:text-[18px] mt-6 laptop:text-[30px] desktop:text-[46px] text-blue-600 p-2">
            IP Multimedia Subsystem(IMS)
          </h1>
          <span className="text-[12px] laptop:text-[14px] desktop:text-[18px] leading-loose text-justify">
            IMS stands for IP Multimedia Subsystem. It is a framework or
            architecture used in telecommunications networks to enable the
            delivery of multimedia services over IP (Internet Protocol)
            networks. IMS provides a standardized approach for delivering
            various multimedia services such as voice, video, messaging, and
            data services across different types of networks, including fixed
            and mobile networks. IMS separates the control plane, which manages
            the session and signaling, from the user plane, which carries the
            actual multimedia traffic. It enables the integration of different
            communication services and applications, allowing for seamless
            multimedia communication and interoperability between different
            devices and networks. With IMS, service providers can offer services
            such as Voice over IP (VoIP), video calling, multimedia messaging,
            and presence-based services. It provides a flexible and scalable
            framework that supports advanced features like session initiation,
            session control, service provisioning, and user authentication. IMS
            also enables the convergence of fixed and mobile networks, allowing
            users to access multimedia services across different devices and
            network types. Overall, IMS plays a crucial role in enabling the
            delivery of multimedia services and facilitating rich communication
            experiences over IP networks.
          </span>
        </div>
        <div className="content-center mt-14 flex justify-center animate__animated animate__fadeInUpBig">
          <img className="w-auto h-[400px]" src={imsCore} alt="5GC core" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default IMSCorePage;
export const Head = () => <title>IMS Core</title>;
