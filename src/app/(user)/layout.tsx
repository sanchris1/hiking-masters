import Footer from "./components/Home/Footer";
import Navbar from "./components/navbar/Navbar";

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default UserLayout;
