"use client";

import Button from "@/app/ui/Button";
import InputComponent from "@/app/ui/Input";
import ButtonLoading from "@/components/ButtonLoading";
import { contactSections } from "@/items/data";
import { useState } from "react";
import toast from "react-hot-toast";

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

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();

    formData.append("access_key", "26fe9448-5757-4de6-a07a-e421a4d93414");

    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("subject", values.subject);
    formData.append("message", values.message);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(data.success ? "Success" : "Error");
    toast.success(result);
    setLoading(false);
  };

  return (
    <section className="bg-surface-50 ">
      <div className="max-w-7xl mx-auto  p-5">
        <div className="flex items-center gap-6 flex-col lg:flex-row  p-8 shadow-lg rounded-xl">
          {/* contact input  section*/}

          <div className="w-full lg:w-5/8 bg-text-accent/30 rounded-lg p-4">
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
            <form className="space-y-5" onSubmit={onSubmit}>
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
                {loading ? <ButtonLoading /> : "Submit"}
              </Button>
            </form>
          </div>

          {/* contact information */}
          <div className="w-full lg:w-3/8 bg-primary rounded-lg p-3 space-y-3">
            <h4 className="text-xl  font-semibold text-white ">
              {capitalizeStatement("Basic camping contact info")}
            </h4>
            <div className="grid grid-cols-2 gap-5">
              {contactSections.map((section) => (
                <div className="flex items-start gap-3" key={section.title}>
                  <div className="text-white flex items-center justify-center p-1">
                    <section.icon className="size-5" />
                  </div>
                  <div className="flex items-start flex-col gap-1">
                    <h6 className="text-white font-semibold text-sm">
                      {" "}
                      {section.title}
                    </h6>
                    <div className="space-y-0.5">
                      {section.contacts.map((item) => (
                        <div key={item.label}>
                          <h6 className="text-surface-200 font-medium text-[13px]">
                            {item.label}
                          </h6>
                          <a
                            href={item.href}
                            className="text-surface-100 text-xs"
                          >
                            {item.value}
                          </a>
                        </div>
                      ))}
                    </div>
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
