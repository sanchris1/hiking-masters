import { socialMediaLinks } from "@/items/data";

const SocialMediaComponent = () => {
  return (
    <div className="flex items-center gap-2">
      {socialMediaLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${link.iconColor}  ${link.backgroundColor} ${link.hoverColor} p-1.5 flex items-center justify-center rounded-full `}
        >
          <link.icon className="size-5" />
        </a>
      ))}
    </div>
  );
};

export default SocialMediaComponent;
