"use client";
import React, { HTMLInputTypeAttribute, useState } from "react";

import { Button } from "../ui/button";

import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

interface FORM_VALIDATION {
  firstname: string;
  lastname: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

const FormSection = () => {
  // 1. Define your form.
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [email, setemail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  // // 2. Define a submit handler.
  function onSubmit(values: FORM_VALIDATION) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    setCompany("");
    setFirstname("");
    setLastname("");
    setMessage("");
    setPhone("");
    setemail("");
  }
  return (
    <section className="text-black flex flex-col items-center gap-6 shadow-inner w-full py-10 px-4 mt-20 rounded-3xl">
      <h1 className="font-medium text-2xl">Contact us</h1>
      <p className="text-sm font-medium">{`Don't hesitate to get in touch. We're always happy to listen and help..`}</p>
      <form
        // onSubmit={form.handleSubmit(onSubmit)}
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit({
            firstname,
            lastname,
            company,
            email,
            phone,
            message,
          });
        }}
        className="space-y-8 max-w-[700px] w-full"
      >
        <div className="flex gap-y-8 sm:gap-4 sm:flex-row flex-col w-full sm:justify-between">
          <Input
            className="rounded-full focus:outline-primary-light-violet"
            placeholder="firstname"
            required
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            minLength={2}
            maxLength={30}
          />
          <Input
            className="rounded-full focus:outline-primary-light-violet"
            placeholder="lastname"
            onChange={(e) => setLastname(e.target.value)}
            value={lastname}
            required
            minLength={2}
            maxLength={30}
          />
        </div>
        <Input
          className="rounded-full focus:outline-primary-light-violet"
          placeholder="company"
          required
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          minLength={2}
          maxLength={30}
        />
        <Input
          className="rounded-full focus:outline-primary-light-violet"
          placeholder="email"
          required
          value={email}
          onChange={(e) => setemail(e.target.value)}
          minLength={12}
          maxLength={60}
          pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
        />
        <Input
          className="rounded-full focus:outline-primary-light-violet"
          placeholder="Phone"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          minLength={10}
          maxLength={10}
        />
        <Textarea
          className="rounded-lg focus:outline-primary-light-violet"
          placeholder="Message..."
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          minLength={2}
          maxLength={30}
        />
        <div className="flex justify-center items-center">
          <Button
            className="w-32 py-1 bg-primary-light-violet hover:bg-pink-700 text-whiterounded-full rounded-full text-white"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </section>
  );
};

export default FormSection;
