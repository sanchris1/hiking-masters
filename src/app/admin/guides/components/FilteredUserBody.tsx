import { UserWithDetails } from "@/types/types";
import Image from "next/image";

const FilteredUserBody = ({
  user,
  handleToggleGuideStatus,
}: {
  user: UserWithDetails;
  handleToggleGuideStatus: (user_id: string) => void;
}) => {
  return (
    <tr className="text-center hover:bg-surface-200">
      <td className="w-90 px-5 py-3">
        <div className="flex items-center gap-1 ">
          <div className="w-15 h-15 relative overflow-hidden rounded-2xl">
            {" "}
            <Image
              alt="user image"
              fill
              className=""
              src={
                user?.user.image ? user.user.image : "/placeholder-human.png"
              }
            />
          </div>
          <h6 className="text-sm font-semibold text-primary">
            {user.user.name}
          </h6>
        </div>
      </td>
      <td>
        <div className="">
          <p className="text-secondary font-semibold text-sm">
            {user.user.email}
          </p>
          {user.guide?.contact && <span>{user.guide.contact}</span>}
        </div>
      </td>
      <td className="text-secondary font-semibold text-sm">
        {user.userProfile?.gender ? user.userProfile.gender : "Not provided"}
      </td>
      <td className="text-sm font-semibold text-primary">
        {user.user.role.toUpperCase()}
      </td>
      <td>
        {user.user.isGuide ? (
          <div className="flex flex-col items-center">
            <span className=" font-semibold tracking-wider leading-relaxed text-primary text-lg">
              Guide
            </span>
            <button
              className="px-3 py-1 bg-red-600 rounded-full text-white font-bold text-sm cursor-pointer"
              onClick={() => handleToggleGuideStatus(user.user.id)}
            >
              Remove as Guide
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <span className=" font-semibold tracking-wider leading-relaxed text-accent text-lg">
              Not Guide
            </span>
            <button
              className="px-3 py-1 bg-green-900 rounded-full text-white font-bold text-sm cursor-pointer"
              onClick={() => handleToggleGuideStatus(user.user.id)}
            >
              Make Guide
            </button>
          </div>
        )}
      </td>
    </tr>
  );
};

export default FilteredUserBody;
