import { getCurrentSession } from "@/server-actions/getCurrentSession";
import { redirect } from "next/navigation";

const ProfileLayout = async ({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) => {
  const session = await getCurrentSession();
  if (!session) {
    redirect("/login");
  }

  return <div className="w-screen">{children}</div>;
};

export default ProfileLayout;
