"use client";

import Button from "@/app/ui/Button";
import InputComponent from "@/app/ui/Input";
import { useState } from "react";
import { BiLocationPlus, BiPhone } from "react-icons/bi";
import { CgMail } from "react-icons/cg";

const campingContactInfo = [
  {
    icon: BiPhone,
    title: "Phone",
    means: "+25412345678",
  },
  {
    icon: CgMail,
    title: "Email",
    means: "contact.mail@gmail.com",
  },
  {
    icon: BiLocationPlus,
    title: "Location",
    means: "Nairobi, Kenya",
  },
];

const ContactPage = () => {
  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const [values, setValues] = useState(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const capitalizeStatement = (str: string) => {
    const splitString = str.split(" ");

    const newStringArray = splitString.map(
      (strings) => strings[0].toUpperCase() + strings.slice(1),
    );

    return newStringArray.join(" ");
  };

  return (
    <section className="bg-surface-50 ">
      <div className="max-w-7xl mx-auto  p-5">
        <div className="flex items-center gap-6 flex-col lg:flex-row  p-8 shadow-lg rounded-xl">
          {/* contact input  section*/}

          <div className="w-full lg:w-2/3 bg-text-accent/30 rounded-lg p-4">
            {/* heading section */}
            <div className="my-3 space-y-2">
              <h4 className="text-2xl  font-semibold text-secondary">
                {capitalizeStatement("send an inquiry")}
              </h4>
              <p className="text-sm text-gray-600">
                Feel free to share your needs and we will get back to you in a
                short while
              </p>
            </div>
            <form className="space-y-5" action="">
              <div className="flex items-center gap-8 w-full  flex-col md:flex-row">
                <InputComponent
                  name="name"
                  as="input"
                  value={values.name}
                  placeholder="Enter your name..."
                  onChange={handleChange}
                />
                <InputComponent
                  name="email"
                  as="input"
                  value={values.email}
                  placeholder="Enter your email..."
                  onChange={handleChange}
                />
              </div>
              <InputComponent
                name="subject"
                as="input"
                value={values.subject}
                placeholder="Enter your subject..."
                onChange={handleChange}
              />
              <InputComponent
                name="message"
                as="textarea"
                value={values.message}
                placeholder="Write your message."
                onChange={handleChange}
              />
              <Button className="" type="submit">
                Submit
              </Button>
            </form>
          </div>

          {/* contact information */}
          <div className="w-full lg:w-1/3 bg-text-accent/30 rounded-lg p-3 space-y-3">
            <h4 className="text-xl  font-semibold text-secondary">
              {capitalizeStatement("Basic camping contact info")}
            </h4>
            <div className="space-y-3 ">
              {campingContactInfo.map((info) => (
                <div
                  className="flex gap-3 items-center p-1 bg-surface-50/20 rounded-sm"
                  key={info.title}
                >
                  {/* icon */}
                  <div className=" border border-border p-2 bg-secondary/80 text-surface-200 rounded-br-2xl rounded-tl-2xl">
                    <info.icon className="size-8" />
                  </div>
                  {/* text */}
                  <div className="">
                    <p className=" text-surface-200 font-semibold text-lg">
                      {info.title}
                    </p>
                    <span className="text-sm text-gray-600 font-medium">
                      {info.means}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
