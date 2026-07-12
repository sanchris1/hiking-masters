/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { UserWithDetails } from "@/types/types";
import axios from "axios";
import { SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BiReset } from "react-icons/bi";
import FilteredUserBody from "./components/FilteredUserBody";

const GuidesPage = () => {
  const [searchGuides, setSearchGuides] = useState("");
  const [loading, setLoading] = useState(false);
  const [allUsers, setAllUsers] = useState<UserWithDetails[]>([]);

  const getAllUsers = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/api/users");

      setAllUsers(res.data.users);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message || "Error fetching the users");
        return;
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const filteredUsers = allUsers.filter(({ user, userProfile }) => {
    const search = searchGuides.toLocaleLowerCase();

    return (
      user.name.toLowerCase().includes(search) ||
      user.email.toLowerCase().includes(search) ||
      userProfile?.phoneNumber?.toLowerCase().includes(search)
    );
  });

  const userTableHeaders = [
    {
      id: "user",
      label: "User",
      width: "w-[25%]",
    },
    {
      id: "contact",
      label: "Contact",
      width: "w-[27%]",
    },

    {
      id: "gender",
      label: "Gender",
      width: "w-[12%]",
    },
    {
      id: "role",
      label: "Role",
      width: "w-[18%]",
    },
    {
      id: "guideStatus",
      label: "Guide Status",
      width: "w-[18%]",
    },
  ];

  const handleToggleGuideStatus = async (user_id: string) => {
    const res = await axios.patch("/api/guides/toggle", { userId: user_id });
    console.log(res);
    getAllUsers();
  };

  return (
    <div className=" flex-1 h-screen">
      <div className="flex flex-col gap-12">
        {/* search column */}
        <div className="flex items-center justify-between w-full  px-2">
          {/* input for search */}
          <div className="relative w-[40%] ">
            <input
              type="text"
              value={searchGuides}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchGuides(e.target.value)
              }
              placeholder="Search for users"
              className="  bg-surface-50 py-3 px-6 outline-none border-2 placeholder:text-gray-600 placeholder:font-medium placeholder:text-[15px] border-secondary rounded-2xl  w-full text-sm text-primary focus:border-primary font-medium pl-12"
            />
            <SearchIcon className="absolute top-1/2 -translate-y-1/2 size-5  left-4  text-gray-600" />
          </div>
          {/* clear search */}
          {searchGuides.trim() !== "" && (
            <div
              className=" cursor-pointer flex items-center gap-3 bg-accent/80 text-primary hover:text-surface-200  font-semibold text-[15px] px-4 py-3 rounded-md border-2  border-primary"
              onClick={() => setSearchGuides("")}
            >
              Reset
              <BiReset />
            </div>
          )}
        </div>

        {/* output */}
        {loading ? (
          <div className="flex items-center justify-center h-screen flex-col max-w-3xl gap-5 mx-auto">
            <span className="size-12 border-3 border-primary border-t-transparent animate-spin rounded-full  "></span>
            <h6 className="text-center text-2xl font-medium text-secondary">
              Users Loading... <br />
              Please wait
            </h6>
          </div>
        ) : filteredUsers.length === 0 ? (
          <div className="flex items-center justify-center h-screen flex-col max-w-3xl gap-5 mx-auto">
            <h6 className="text-center text-2xl font-medium text-secondary">
              No Users found
            </h6>
          </div>
        ) : (
          <table className="w-full border-separate border-spacing-0 bg-surface-200">
            <thead className="">
              <tr className="">
                {userTableHeaders.map((header) => (
                  <th
                    key={header.id}
                    className={` ${header.width} text-primary`}
                  >
                    {header.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-surface-50">
              {filteredUsers.map((user) => (
                <FilteredUserBody
                  key={user.user.id}
                  user={user}
                  handleToggleGuideStatus={handleToggleGuideStatus}
                />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default GuidesPage;
