import { BiMenu } from "react-icons/bi";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  icon?: typeof BiMenu;
  iconPosition?: "left" | "right";
}

const Button = ({
  onClick,
  className,
  children,
  icon: Icon,
  iconPosition = "right",
}: ButtonProps) => {
  return (
    <button
      className={`flex items-center justify-between  py-2 px-4 text-[14px] rounded-2xl hover:shadow-xl cursor-pointer duration-500 transition-all font-medium bg-accent text-surface-100 ${className}`}
      onClick={onClick}
    >
      {Icon && iconPosition === "left" && <Icon className="size-4" />}
      {children}
      {Icon && iconPosition === "right" && <Icon className="size-4" />}
    </button>
  );
};

export default Button;
