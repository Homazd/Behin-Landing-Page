import * as React from "react";
import Phone from "../../../images/call-outline.svg";
import Mail from "../../../images/mail-outline.svg";

function Contact() {
  return (
    <div>
      <h3 className="mt-[17px] pb-[27px] text-slate-50 font-bold text-[20px]">
        Contacts
      </h3>
      <div className="flex">
        <Phone className="w-6 h-6 mt-[5px] text-slate-50" />
        <span className="text-slate-50 ml-[15px] text-[22px] font-bold">
          +98 21 33104958
        </span>
      </div>
      <div className="flex mt-[38px]">
        <Mail className="w-6 h-6 mt-[5px] text-slate-50" />
        <span className="text-slate-50 ml-[15px] text-[22px] font-bold underline">
          sales@bbdh.com
        </span>
      </div>
      <p className="text-slate-50 underline mt-[20px] ml-[56px]">LinkedIN</p>
      <p className="underline text-slate-50 ml-[56px] mt-[21px]">
        All contacts
      </p>
    </div>
  );
}
export default Contact;
