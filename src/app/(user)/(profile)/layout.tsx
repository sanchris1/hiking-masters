import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "../../../../utils/auth";

const ProfileLayout = async ({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) => {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) {
    redirect(`/login`);
  }

  return <>{children}</>;
};

export default ProfileLayout;
