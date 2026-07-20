import { footerSections } from "@/items/footer";
import Logo from "../logo/Logo";

const Footer = () => {
  return (
    <footer className="bg-surface-200 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-4 xl:grid-cols-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="flex flex-col items-start gap-5">
            <Logo />
            <p className="font-sans">
              &quot;The mountains are calling, and i must go&quot;
              <br /> --John Muir
            </p>
          </div>
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-5">
              <h5 className="font-semibold text-text-accent">
                {section.title}
              </h5>
              <div className="flex flex-col gap-3">
                {section.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    className="text-sm font-medium text-secondary hover:underline hover:text-accent transition duration-500"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="text-gray-600 font-medium text-sm text-center mt-8">
          &copy; {new Date().getFullYear()} Trails and Memoirs. All rights
          reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
