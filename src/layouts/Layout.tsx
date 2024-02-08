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
        <main className="flex-1 md:px-7 sm:px-3 px-2 pt-2 h-[calc(100%-70px)] bg-[#fff] overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;
