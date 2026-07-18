import { headers } from "next/headers";
import { auth } from "../../../utils/auth";
import Footer from "./components/Home/Footer";
import Navbar from "./components/navbar/Navbar";
import StoreInitializer from "@/store/StoreInitializer";

const UserLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth.api.getSession({ headers: await headers() });

  return (
    <>
      <Navbar />
      <StoreInitializer session={session} />
      {children}
      <Footer />
    </>
  );
};

export default UserLayout;
