import UserProfileCard from "./components/UserProfileCard";

const UserProfilePage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      {" "}
      <div className="flex items-start gap-6 flex-col lg:flex-row mt-8 ">
        <UserProfileCard />
        <div className="flex items-center gap-6 flex-col w-full lg:w-3/4 bg-primary">
          the information side
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
