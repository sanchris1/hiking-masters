import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href={"/"}
      className="uppercase font-black text-lg text-primary group hover:text-accent duration-500 transition-colors flex flex-col items-center gap-1 rounded-full"
    >
      <div className="w-30 h-20 relative rounded-full">
        <Image fill alt="logo" className="object-center " src={"/icon.svg"} />
      </div>
    </Link>
  );
};

export default Logo;
