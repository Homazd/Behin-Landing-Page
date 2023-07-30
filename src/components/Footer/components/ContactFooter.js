import * as React from "react";
// Components
import Phone from "../../../images/call-outline.svg";
import Mail from "../../../images/mail-outline.svg";

function Contact() {
  return (
    <div className="grid place-content-center">
      <h3 className="mt-[17px] text-center pb-[27px] text-slate-50 font-bold text-[12px] tablet:text-[20px] laptop:text-[20px]">
        Contacts
      </h3>
      <div className="flex">
        <Phone className="w-4 h-4 mt-[3px] text-slate-50" />
        <span className="text-slate-50 ml-[15px] text-[12px] tablet:text-[14px]">
          +98 21 3523 8535
        </span>
      </div>
      <div className="flex mt-[38px]">
        <Mail className="w-4 h-4 mt-[3px] text-slate-50" />
        <span className="text-slate-50 ml-[15px] text-[12px] tablet:text-[14px] underline">
          sales@bbdh.com
        </span>
      </div>
      <p className="text-slate-50 underline text-center text-[12px] tablet:text-[14px] mt-[20px] cursor-pointer">
        <a href="https://www.linkedin.com/company/behin-baygan-dadeh-hoonam/mycompany/">
          LinkedIN
        </a>
      </p>
      <p className="underline text-slate-50 text-center text-[12px] tablet:text-[14px] mt-[21px]">
        All contacts
      </p>
    </div>
  );
}
export default Contact;
