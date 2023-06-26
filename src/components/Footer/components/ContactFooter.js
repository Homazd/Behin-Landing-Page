import * as React from "react";
import Phone from "../../../images/call-outline.svg";
import Mail from "../../../images/mail-outline.svg";

function Contact() {
  return (
    <div>
      <h3 className="mt-[17px] pb-[27px] text-slate-50 font-bold text-[12px] tablet:text-[14px] tablet:text-[20px]">
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
      <p className="text-slate-50 underline text-[12px] tablet:text-[14px] mt-[20px] ml-[56px]">
        LinkedIN
      </p>
      <p className="underline text-slate-50  text-[12px] tablet:text-[14px] ml-[56px] mt-[21px]">
        All contacts
      </p>
    </div>
  );
}
export default Contact;
