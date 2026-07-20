import { getCurrentUser } from "@/server-actions/getCurrentUser";
import { Shield } from "lucide-react";
import Image from "next/image";

type CurrentUser = NonNullable<Awaited<ReturnType<typeof getCurrentUser>>>;
export interface UserProfileCardProps {
  currentUser: CurrentUser;
}

const UserProfileCard = ({ currentUser }: UserProfileCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow space-y-5 px-2 md:px-5 py-8 border border-border flex flex-col items-center h-fit w-full">
      <div className="w-25 rounded-full h-25 relative ">
        <Image
          alt="user-profile-image"
          fill
          className=" object-cover rounded-full"
          src={
            currentUser.user.image ? currentUser.user.image : "/placeholder.jpg"
          }
        />
        {currentUser.user.isGuide && (
          <div className="absolute bottom-0 right-0 size-8 bg-primary p-1 flex items-center justify-center text-white rounded-full ">
            <Shield />
          </div>
        )}
      </div>
      <div className="flex items-center gap-2 flex-col">
        <h4 className="text-xl font-semibold text-primary leading-relaxed">
          {currentUser.user.name}
        </h4>
        {currentUser.user.isGuide && (
          <p className="text-primary font-medium text-xs px-2 rounded-full bg-green-200">
            A serving guide
          </p>
        )}
        <p className="tracking-wider text-sm font-semibold text-primary">
          Member since{" "}
          {new Date(currentUser.user.createdAt).toLocaleString("en-GB", {
            month: "long",
            year: "numeric",
          })}
        </p>
        <button className="w-full  bg-primary/90 hover:bg-primary/95 active:bg-primary text-white rounded-xl py-2 font-semibold">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default UserProfileCard;
