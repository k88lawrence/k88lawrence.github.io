import Sidebar from "./sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="App">
        <Sidebar />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
