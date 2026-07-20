import { CiEdit } from "react-icons/ci";
import { UserProfileCardProps } from "./UserProfileCard";

const PersonalInformation = ({ currentUser }: UserProfileCardProps) => {
  return (
    <div className="space-y-4 w-full px-2 md:px-5 py-8 bg-white  rounded-xl shadow border-border border">
      <div className="flex items-center justify-between ">
        <h3 className="text-2xl font-medium text-primary tracking-wider">
          Personal Information
        </h3>
        <button className="flex items-center gap-2 text-primary hover:text-accent text-sm cursor-pointer ">
          <CiEdit /> Edit
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-1 flex flex-col">
          <span className="text-[12px] uppercase">Full Name</span>
          <span className="text-[15px] text-primary font-medium">
            {currentUser.user.name}
          </span>
        </div>
        <div className="space-y-1 flex flex-col">
          <span className="text-[12px] uppercase">Email Address</span>
          <span className="text-[15px] text-primary font-medium">
            {currentUser.user.email}
          </span>
        </div>
        <div className="space-y-1 flex flex-col">
          <span className="text-[12px] uppercase">Phone Number</span>
          <span className="text-[15px] text-primary font-medium">
            {currentUser.user_profile?.phoneNumber
              ? currentUser.user_profile?.phoneNumber
              : "Number not provided"}
          </span>
        </div>
        <div className="space-y-1 flex flex-col">
          <span className="text-[12px] uppercase">Gender</span>
          <span className="text-[15px] text-primary font-medium">
            {currentUser.user_profile?.gender
              ? currentUser.user_profile?.gender.toUpperCase()
              : "Gender not provided"}
          </span>
        </div>
        <div className="space-y-1 flex flex-col">
          <span className="text-[12px] uppercase">Emergency Contact</span>
          <span className="text-[15px] text-primary font-medium">
            {currentUser.user_profile?.phoneNumber
              ? currentUser.user_profile?.phoneNumber
              : "Contact not provided"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
