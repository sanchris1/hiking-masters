import Link from "next/link";
import { myNavLinks } from "./Navbar";

const MobileMenu = ({
  setOpenMobileMenu,
  openMobileMenu,
}: {
  openMobileMenu: boolean;
  setOpenMobileMenu: (prev: boolean) => void;
}) => {
  return (
    <div
      className={`${openMobileMenu ? "opacity-100 translate-y-0" : "opacity-0 translate-y-100 pointer-events-none"} z-50 transition ease-in-out duration-500  bg-card/60 py-5  backdrop-blur-3xl h-80 m-6 rounded-4xl  fixed top-[10%] left-0 right-0 shadow-lg`}
    >
      <div className="flex items-center justify-center ">
        <div className="flex flex-col items-center gap-8 ">
          {myNavLinks.map((link) => (
            <Link
              onClick={() => setOpenMobileMenu(false)}
              href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
              key={link}
              className={`text-primary text-lg font-semibold    `}
            >
              {link}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
