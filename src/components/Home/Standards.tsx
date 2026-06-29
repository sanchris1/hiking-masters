import Image from "next/image";
import React from "react";
import { FaEnvira, FaHandHoldingMedical } from "react-icons/fa6";
import { MdVerifiedUser } from "react-icons/md";

const features = [
  {
    icon: MdVerifiedUser,
    title: "Expert Guiding",
    description:
      "Every guide is UIAGM/IFMGA certified with a minimum of 10 years experience in technical alpine terrain.",
  },
  {
    icon: FaHandHoldingMedical,
    title: "Safety Protocols",
    description:
      "We carry satellite communication and advanced medical kits on every trip. Your safety is our primary mission.",
  },
  {
    icon: FaEnvira,
    title: "Leave No Trace",
    description:
      "We are committed to preserving the fragile ecosystems we explore. Sustainability is woven into our logistics.",
  },
];

const Standards = () => {
  return (
    <section className="min-h-screen bg-primary py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <div className="relative w-full lg:w-1/2 h-120 rounded-2xl overflow-hidden">
            <Image
              src="/nature3.jpg"
              alt="Features"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h3 className="text-4xl font-bold text-surface-50 ">
              Uncompromising standards in the great wild.
            </h3>

            {features.map((feature, index) => (
              <div key={index} className="flex gap-3 items-start">
                <div className="flex items-center justify-center bg-text-accent rounded-xl p-2">
                  <feature.icon className="size-8 text-surface-200 " />
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="font-semibold text-surface-100 text-lg">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-surface-200/70">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Standards;
