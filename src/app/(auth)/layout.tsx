import AuthNav from "./components/AuthNav";

const AuthLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div>
      <AuthNav />
      <main className="">{children}</main>
    </div>
  );
};

export default AuthLayout;
