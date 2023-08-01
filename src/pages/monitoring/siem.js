import * as React from "react";
import { Link } from "gatsby";

// Components
import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
// Images
import networkManagement from "../../images/network-management.webp";
import siem from "../../images/SIEM-1.png";

const SiemPage = () => {
  return (
    <>
      <Header />
      <Navigation />
      <div
        className="h-52 bg-center bg-cover w-screen tablet:h-80"
        style={{ backgroundImage: `url(${networkManagement})` }}
      ></div>
      <p className="text-gray-500 text-[14px] desktop:text-[20px] underline mt-[20px] pl-[15px] laptop:pl-[30px] desktop:w-[1200px] desktop:mx-auto">
        <Link to="/">Home</Link> /<Link to="/monitoring/siem">SIEM</Link>
      </p>
      <div className="w-[300px] tablet:w-[700px] laptop:w-[800px] desktop:w-[1200px] mx-auto mt-5 place-content-center">
        <div className="grid place-content-center">
          <h1 className="font-bold text-[23px] tablet:text-[18px] mt-6 laptop:text-[30px] desktop:text-[46px] text-blue-600 p-2">
            SIEM (Security Information and Event Management)
          </h1>
          <span className="text-[12px] laptop:text-[14px] desktop:text-[18px] leading-loose text-justify">
            SIEM (Security Information and Event Management) is a type of
            security solution that combines security information management
            (SIM) and security event management (SEM) to provide a comprehensive
            view of an organization's security posture. SIEM solutions can help
            organizations detect and respond to security threats and incidents
            in real-time. SIEM systems collect and analyze security-related data
            from various sources, including network devices, servers,
            applications, and security devices such as firewalls and intrusion
            detection systems. The system then correlates this data to identify
            security events, anomalies, and potential threats. This can help
            security teams detect and respond to security incidents more
            quickly, reducing the impact of a potential data breach. SIEM
            solutions typically include several core capabilities, such as log
            management, event correlation, real-time monitoring, threat
            intelligence integration, and reporting and analytics. Some SIEM
            solutions also include additional features such as endpoint
            detection and response (EDR), user behavior analytics (UBA), and
            security orchestration, automation, and response (SOAR)
            capabilities. Monitoring is a key aspect of SIEM systems, as it
            enables organizations to detect and respond to security events in
            real-time. Monitoring involves collecting and analyzing data from
            various sources, such as network traffic, system logs, and user
            activity. This data is then used to identify potential security
            threats and incidents. Monitoring can be performed using various
            tools and techniques, such as intrusion detection systems (IDS),
            intrusion prevention systems (IPS), firewalls, and endpoint security
            solutions. These tools can help organizations detect and prevent
            security threats before they can cause damage to their systems or
            data. In summary, SIEM and monitoring are important aspects of an
            organization's security posture. SIEM solutions can help
            organizations detect and respond to security threats in real-time,
            while monitoring enables organizations to detect and prevent
            security threats before they can cause damage.
          </span>
        </div>
        <div className="content-center mt-14 flex justify-center animate__animated animate__fadeInUpBig">
          <img
            className="w-[250px] h-[200px] tablet:w-auto tablet:h-[400px]"
            src={siem}
            alt="siem"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SiemPage;
export const Head = () => <title>SIEM</title>;
