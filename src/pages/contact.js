import * as React from "react";
import { Link } from "gatsby";
// Components
import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
// Ant design components
import { Button, Form, Input, Select } from "antd";

const FormItem = Form.Item;
const { Option } = Select;
const { TextArea } = Input;

const ContactPage = () => {
  const [form] = Form.useForm();

  const onCompanyChange = (value) => {
    switch (value) {
      case "Company":
        form.setFieldsValue({
          note: "Hi, man!",
        });
        break;
      case "Freelancer":
        form.setFieldsValue({
          note: "Hi, lady!",
        });
        break;
      case "other":
        form.setFieldsValue({
          note: "Hi there!",
        });
        break;
      default:
    }
  };

  return (
    <>
      <Header />
      <Navigation />
      <p className="text-gray-500 underline mt-[20px] pl-[15px] laptop:pl-[30px] desktop:w-[1200px] desktop:mx-auto">
        <Link to="/">Home</Link>
      </p>
      <div className="px-[15px] tablet:px-[30px] mt-[30px] laptop:grid laptop:grid-cols-2 desktop:w-[1200px] desktop:mx-auto">
        <div className="laptop:col-span-1 laptop:mt-10">
          <h1 className="font-bold mb-[30px] text-[20px] laptop:text-[28px] laptop:col-span-1">
            BBDH Technologies Co., Ltd
          </h1>
          <div className="grid content-center">
            <div className="text-[16px] laptop:text-[22px] block font-semibold">
              Operation and R&D Center Address:
            </div>
            <div className="text-[16px] laptop:text-[20px]">
              Number 68, Second Floor, Elm va San'at St., Hengam St.,Tehran, Iran
            </div>
            <div className="mt-[30px]">
              <p className="text-[16px] laptop:text-[22px] font-semibold">Contact Information:</p>
              <p className="text-[16px] laptop:text-[22px]">
                Email:
                <span className="text-[18px] laptop:text-[22px] font-bold text-blue-800 underline">
                  sales@bbdh.com
                </span>
              </p>
              <p className="text-[16px] laptop:text-[22px]">
                Phone:
                <span className="text-[18px] laptop:text-[22px] font-bold text-blue-800">
                  +98-21-3523-8535
                </span>
              </p>
              <p className="text-[16px] laptop:text-[22px]">
                WhatsApp:
                <span className="text-[18px] laptop:text-[22px] font-bold text-blue-800 underline">
                  sales@bbdh.com
                </span>
              </p>
              <p className="text-[16px] laptop:text-[22px]">
                Working hours:
                <span className="text-[18px] laptop:text-[22px] font-bold text-blue-800">
                  9:00 AM to 6:00 PM(UTC/GMT +3.5)
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="bg-orange-100 mt-10 p-5">
          <h1 className="text-center text-[20px] laptop:text-[30px] font-bold">
            SEND US A MESSAGE
          </h1>
          <p className="text-center text-[16px] mt-3">
            Do you have a project? Are you interested in our products/solutions?
          </p>
          <p className="text-center text-[16px]">
            Please directly talk to us and we will contact you as soon as
            possible.
          </p>
          <Form layout="vertical" className="mt-5 laptop:col-span-1">
            <FormItem
              label={
                <span className="text-gray-500  text-[16px]">
                  Full name
                </span>
              }
              name="fullname"
              required="true"
            >
              <Input />
            </FormItem>
            <FormItem
              label={
                <span className="text-gray-500  text-[16px]" style={{ padding: 0 }}>
                  Products/Solutions
                </span>
              }
            >
              <Input placeholder="" />
            </FormItem>
            <FormItem
              label={<span className="text-gray-500  text-[16px]">Email</span>}
              required="true"
              style={{ padding: 0 }}
            >
              <Input placeholder="" />
            </FormItem>
            <FormItem label={<span className="text-gray-500 text-[16px]">Phone</span>}>
              <Input placeholder="" />
            </FormItem>
            <FormItem
              name="Company"
              label={<span className="text-gray-500 text-[16px]">Company</span>}
              required="true"
            >
              <Select
                placeholder="Company"
                onChange={onCompanyChange}
                allowClear
              >
                <Option value="Company">Company</Option>
                <Option value="Freelancer">Freelancer</Option>
              </Select>
            </FormItem>
            <FormItem
              label={<span className="text-gray-500 text-[16px]">Message</span>}
              required="true"
            >
              <TextArea rows={4} />
            </FormItem>
            <div className="flex justify-center">
              <Button className="bg-blue-800 justify-center text-white hover:bg-blue-600">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default ContactPage;
export const Head = () => <title>Contact us</title>;
