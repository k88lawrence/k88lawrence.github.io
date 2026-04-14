import MobileHeader from "./mobile-header";
import MobileFooter from "./mobile-footer";
import Sidebar from "./sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="App">
        <Sidebar />
        <MobileHeader />
        <main>
          {children}
          <MobileFooter />
        </main>
      </div>
    </>
  );
};

export default Layout;
