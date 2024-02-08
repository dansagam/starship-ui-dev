import Header from "./Header";
import Sidebar from "./Sidebar";
import { IChildren } from "@/@types/baseInterface";

type LayoutProps = IChildren;

function Layout({ children }: LayoutProps) {
  return (
    <div className=" h-screen w-full flex">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
}

export default Layout;
