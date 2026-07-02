import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href={"/"}
      className="uppercase font-black text-lg text-primary group hover:text-accent duration-500 transition-colors"
    >
      Super
      <span className="text-accent group-hover:text-primary duration-500 transition-colors">
        hikers
      </span>
    </Link>
  );
};

export default Logo;
