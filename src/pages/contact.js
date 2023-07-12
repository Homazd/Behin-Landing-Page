import * as React from "react";
import { Link } from "gatsby";
import axios from "axios";
// import { useEffect } from "react";
// Components
import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
// Ant design components
import { Button, Input, notification } from "antd";
// Validation
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const items = ["name", "email", "phone"];

// Validation using YUP

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Please enter your name"),
  email: Yup.string()
    .email("Please enter a valid email adrees.")
    .required("Please enter your email address."),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "Please enter a valid phone number.")
    .required("Please enter your phone number."),
  message: Yup.string().required("Please enter your message."),
});

const { TextArea } = Input;

const Axios = axios.create({
  baseURL: "http://192.168.0.205:1337",});

const ContactPage = () => {
  const data = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const handleSubmit = async (values, { resetForm }) => {
    const apiUrl = "/contact/";

    try {
      await Axios.post(apiUrl, values, {
        mode: 'no-cors'
      });
      resetForm();
      // Show a success message to the user
      notification.success({
        message: "Form submission successful",
        description:
          "Thank you for contacting us! We will get back to you as soon as possible.",
      });
    } catch (error) {
      console.error("error is:", error);
      // Show an error message to the user
      notification.error({
        message: "Form submission failed",
        description:
          "There was an error submitting the form. Please try again later.",
      });
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
              Number 68, Second Floor, Elm va San'at St., Hengam St.,Tehran,
              Iran
            </div>
            <div className="mt-[30px]">
              <p className="text-[16px] laptop:text-[22px] font-semibold">
                Contact Information:
              </p>
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
          <Formik
            initialValues={data}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form className="mt-5 laptop:col-span-1">
                {items.map((item, index) => (
                  <div className="mb-4" key={index}>
                    <label
                      htmlFor={item}
                      className="block mb-2 font-bold text-gray-700"
                    >
                      {item}
                    </label>
                    <Field
                      name={item}
                      type={item}
                      className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                        touched.item && errors.item ? "border-red-500" : ""
                      }`}
                    />

                    <ErrorMessage
                      name={item}
                      component="p"
                      className="text-red-500 text-xs italic mt-1"
                    />
                  </div>
                ))}
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block mb-2 font-bold text-gray-700"
                  >
                    Message
                  </label>
                  <Field name="message">
                    {({ field }) => (
                      <TextArea
                        {...field}
                        autoSize={{ minRows: 3, maxRows: 6 }}
                        className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                          touched.message && errors.message
                            ? "border-red-500"
                            : ""
                        }`}
                      />
                    )}
                  </Field>
                  <ErrorMessage
                    name="message"
                    component="p"
                    className="text-red-500 text-xs italic mt-1"
                  />
                </div>
                <div className="flex justify-center">
                  <Button
                    htmlType="submit"
                    className="bg-blue-800 justify-center text-white hover:bg-blue-600"
                    disabled={
                      isSubmitting ||
                      Object.keys(touched).length === 0 ||
                      Object.keys(errors).length !== 0
                    }
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default ContactPage;
export const Head = () => <title>Contact us</title>;
