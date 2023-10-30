import * as React from "react";
import { Link } from "gatsby";
// Components
import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
// Images
import productsImage from "../../images/product-header.png";
import AF from "../../images/AF.jpg";

const AFPage = () => {
  return (
    <>
      <Header />
      <Navigation />
      <div
        className="h-52 bg-center bg-cover w-screen tablet:h-80"
        style={{ backgroundImage: `url(${productsImage})` }}
      >
        Products
      </div>
      <p className="text-gray-500 text-[14px] desktop:text-[20px] underline mt-[20px] pl-[15px] laptop:pl-[30px] desktop:w-[1200px] desktop:mx-auto">
        <Link to="/">Home</Link> / <Link to="/fiveGC/">5GC</Link> /{" "}
        <Link to="/fiveGC/af">AF</Link>
      </p>
      <div className="w-[300px] tablet:w-[700px] laptop:w-[800px] desktop:w-[1200px] mx-auto mt-5 place-content-center">
        <div className="grid place-content-center">
          <h1 className="font-bold text-[23px] tablet:text-[18px] mt-6 laptop:text-[30px] desktop:text-[46px] text-blue-600 p-2">
            AF
          </h1>
          <span className="text-[12px] laptop:text-[14px] desktop:text-[18px] leading-loose text-justify">
            In the context of 5G networks, AF stands for Application Function
            (AF). The AF is a key network function in the 5G Core (5GC)
            architecture responsible for providing application-related services
            and policies. It acts as an intermediary between the 5G core network
            and various applications, enabling network customization and quality
            of service (QoS) control based on the specific needs and
            requirements of different applications. Here's a detailed
            description of AF and its functions:
            <ol className="list-decimal">
              <li>
                <span className="font-bold">
                  Application Service Provision:{" "}
                </span>{" "}
                The AF is responsible for providing specific services related to
                applications. This includes defining the service requirements
                and characteristics for various applications, such as latency,
                bandwidth, security, and other application-specific needs.{" "}
              </li>
              <li>
                <span className="font-bold">
                  Policy Control and Management:
                </span>{" "}
                AF manages policies that govern how applications interact with
                the network. These policies define rules for QoS, traffic
                management, access control, and other parameters to ensure
                optimal performance and resource allocation for applications.
              </li>
              <li>
                <span className="font-bold">Traffic Steering and Shaping:</span>{" "}
                AMF AF controls and directs traffic flow based on predefined
                policies and service requirements. It ensures that traffic is
                routed efficiently and optimally through the network to meet the
                specific needs of applications.{" "}
              </li>
              <li>
                <span className="font-bold">QoS Enforcement:</span> The AF
                enforces quality of service (QoS) for applications by ensuring
                that the network resources are allocated and managed in a way
                that meets the QoS parameters specified for each application.{" "}
              </li>
              <div className="content-center mt-14 flex justify-center animate__animated animate__fadeInUpBig">
                <img className="w-auto h-[400px]" src={AF} alt="5GC core" />
              </div>
              <li>
                <span className="font-bold">Interactions with PCF:</span> The AF
                interacts with the Policy Control Function (PCF) to implement
                and manage policies effectively. PCF plays a crucial role in
                policy decision-making, and AF cooperates with it to enforce
                these policies for applications.{" "}
              </li>
              <li>
                {" "}
                <span className="font-bold">
                  Integration with Other Network Functions:
                </span>{" "}
                AF collaborates with various network functions within the 5GC,
                such as SMF (Session Management Function), UPF (User Plane
                Function), and others, to ensure seamless communication and
                interaction with applications and their corresponding services.{" "}
              </li>
              <li>
                <span className="font-bold">Dynamic Policy Updates: </span> The
                AF can dynamically update policies based on changes in
                application requirements or network conditions. This
                adaptability ensures that applications receive the required
                resources and QoS even during varying network loads.{" "}
              </li>
              <li>
                <span className="font-bold">
                  User and Application Authentication:
                </span>{" "}
                AMF AF can be involved in authentication processes for both
                users and applications, ensuring secure and authorized access to
                the network and services.{" "}
              </li>
              <li>
                {" "}
                In summary, the Application Function (AF) in a 5G network is a
                critical component that acts as a bridge between the 5G core
                network and applications. It provides application-related
                services, policies, and controls to ensure optimal performance,
                QoS, and efficient resource usage for different applications,
                contributing to an enhanced user experience and enabling a wide
                range of diverse applications in the 5G ecosystem.
              </li>
            </ol>
          </span>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AFPage;
export const Head = () => <title>AF</title>;
