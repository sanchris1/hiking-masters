import { getCurrentSession } from "@/server-actions/getCurrentSession";
import Footer from "./components/Home/Footer";
import Navbar from "./components/navbar/Navbar";
import StoreInitializer from "@/store/StoreInitializer";

const UserLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getCurrentSession();
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
