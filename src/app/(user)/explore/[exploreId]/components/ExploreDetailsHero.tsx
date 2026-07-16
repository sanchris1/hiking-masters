import { Expedition, Guide, Schedule } from "@/schema";
import Image from "next/image";
import Link from "next/link";
import { IoLocationOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";

export type ExpeditionProps = {
  expedition: Expedition;
  guide?: Guide;
  schedule?: Schedule | null;
};

const ExploreDetailsHero = ({ expedition }: ExpeditionProps) => {
  return (
    <div className="w-full h-screen relative">
      <Image
        src={expedition.image}
        alt={expedition.title}
        fill
        className="object-cover "
      />
      <div className="absolute inset-0 bg-text-accent/60 backdrop-blur-sm" />
      <div className="absolute inset-0 flex items-center justify-center ">
        <div className="flex items-start flex-col space-y-3">
          <div className="flex items-center gap-2 text-surface-50 font-semibold text-sm">
            <Link href={"/"} className="hover:underline hover:text-surface-200">
              Home
            </Link>{" "}
            <MdKeyboardArrowRight />{" "}
            <Link
              href={"/explore"}
              className="hover:text-surface-200  hover:underline"
            >
              Expeditions
            </Link>{" "}
            <MdKeyboardArrowRight />{" "}
            <span className="">{expedition.title}</span>
          </div>
          <h2 className="text-surface-100 font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-relaxed">
            {expedition.title}
          </h2>
          <span className="flex items-center gap-2 text-[22px] font-semibold text-surface-100">
            <IoLocationOutline /> {expedition.location}
          </span>
          <div className="rounded-xl p-4  w-full bg-surface-50/70 backdrop-blur-xl grid grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="space-y-2">
              <span className="uppercase text-sm text-secondary">Category</span>
              <p className="text-[18px] text-primary font-semibold">
                {expedition.category}
              </p>
            </div>
            <div className="space-y-2">
              <span className="uppercase text-sm text-secondary">Price</span>
              <p className="text-[18px] text-primary font-semibold">
                KSH: {expedition.price.toLocaleString()}
              </p>
            </div>
            <div className="space-y-2">
              <span className="uppercase text-sm text-secondary">
                Departure Date
              </span>
              <p className="text-[18px] text-primary font-semibold">
                {new Date(expedition.departureDate).toLocaleString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
            <button className="py-2 px-4 rounded-full text-sm font-semibold bg-accent text-surface-200 hover:shadow-md cursor-pointer">
              Book This Expedition
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreDetailsHero;
