"use client";

import { useState } from "react";

const EmailSubmit = () => {
  const [emailValue, setEmailValue] = useState("");

  return (
    <section className="mb-20  bg-white">
      <div className="max-w-5xl mx-auto bg-accent/20 py-12 rounded-3xl">
        <div className="flex items-center justify-center flex-col gap-5">
          <h2 className="font-bold text-4xl text-text-accent text-center">
            Ready for the summit?
          </h2>
          <p className="text-center max-w-xl mx-auto text-secondary text-sm font-medium ">
            Join 15,000+ adventurers receiving monthly trail reports, gear
            reviews, and exclusive expedition early access.
          </p>

          <form className="flex items-center gap-3 flex-col md:flex-row">
            <input
              type="email"
              value={emailValue}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmailValue(e.target.value)
              }
              placeholder="Enter your email..."
              required
              className="text-sm px-6 py-4 rounded-2xl bg-surface-50 outline-0 w-80 font-semibold text-secondary"
            />

            <button
              className="px-8 py-4 text-surface-50 bg-text-accent rounded-xl cursor-pointer font-semibold text-sm w-full"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EmailSubmit;
