import { getCurrentUser } from "@/server-actions/getCurrentUser";
import UserProfileCard from "./components/UserProfileCard";
import PersonalInformation from "./components/PersonalInformation";
import NextExpedition from "./components/NextExpedition";
import FavoriteExpeditions from "./components/FavoriteExpeditions";
import { getUserFavoriteExpeditions } from "@/server-actions/getUserFavoriteExpeditions";

const UserProfilePage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) return <p>User not found</p>;

  const favorites = await getUserFavoriteExpeditions();

  return (
    <div className=" my-8 px-4 md:px-6 lg:px-8 py-8  max-w-screen">
      {" "}
      <div className="lg:px-24 md:px-12 grid grid-cols-1 lg:grid-cols-[350px_1fr]  gap-8 ">
        <UserProfileCard currentUser={currentUser} />
        <div className=" space-y-8 ">
          <PersonalInformation currentUser={currentUser} />
          <NextExpedition />
          <FavoriteExpeditions favorites={favorites} />
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
