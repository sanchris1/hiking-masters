import { BiLeaf } from "react-icons/bi";
import { BsAward } from "react-icons/bs";
import { FaMountain } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { HiShieldCheck } from "react-icons/hi";
import { TbHeartHandshake } from "react-icons/tb";

const valuesWeTrekBy = [
  {
    id: 1,
    icon: HiShieldCheck,
    title: "Integrity",
    description:
      "We do what is right, keep our promises, and ensure every adventure is built on honesty, trust, and transparency.",
  },
  {
    id: 2,
    icon: FaUsers,
    title: "Community",
    description:
      "Every hike is an opportunity to build meaningful friendships, encourage one another, and create lasting memories together.",
  },
  {
    id: 3,
    icon: BiLeaf,
    title: "Stewardship",
    description:
      "We respect nature by protecting the trails we explore, leaving every destination better than we found it for future generations.",
  },
  {
    id: 4,
    icon: BsAward,
    title: "Excellence",
    description:
      "From planning to the final summit, we strive to deliver safe, organized, and memorable experiences with attention to every detail.",
  },
  {
    id: 5,
    icon: FaMountain,
    title: "Adventure",
    description:
      "We believe growth happens outside our comfort zones, encouraging people to explore new places, challenge themselves, and embrace every journey.",
  },
  {
    id: 6,
    icon: TbHeartHandshake,
    title: "Service",
    description:
      "We put people first by creating welcoming experiences, supporting one another, and serving every hiker with genuine care and respect.",
  },
];

const Values = () => {
  return (
    <section className="my-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center flex-col">
          <h1 className="text-primary font-semibold text-3xl lg:text-4xl leading-relaxed">
            Values we trek by
          </h1>
          <p className="text-secondary font-medium  text-center">
            Foundational principles that guide every decision from the planing
            to executing the trails
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
          {valuesWeTrekBy.map((value, index) => (
            <div
              key={value.id}
              className={`  border-b-3 ${index % 2 === 0 ? "border-primary" : "border-accent"} p-3 space-y-4 shadow-md rounded-xl`}
            >
              <value.icon
                className={`size-6   ${index % 2 === 0 ? "text-primary" : "text-accent"} `}
              />
              <h6 className="text-lg text-primary font-semibold">
                {value.title}
              </h6>
              <p className="text-sm font-medium text-secondary">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
