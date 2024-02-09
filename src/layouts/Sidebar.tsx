// import React from "react";
import { Link } from "react-router-dom";
import { MAIN_SIDEBAR, OVERVIEW_SIDEBAR, sidebar_logo } from "./sidebar-data";
import SidebarLink from "./SidebarLink";

function Sidebar() {
  return (
    <aside className=" sticky top-0 h-full overflow-y-auto w-[320px] min-w-[520px]:w-[90px] md:w-[320px] bg-sidebar-main py-6 px-5 flex flex-col gap-7">
      <div>
        <Link to="/login">
          <img loading="eager" src={sidebar_logo} alt="LOGO" />
        </Link>
      </div>
      <div className=" flex flex-col gap-3 mb-3">
        {OVERVIEW_SIDEBAR.map((field) => (
          <SidebarLink link={field} key={field.key} />
        ))}
      </div>
      <div className=" flex flex-col gap-4">
        {MAIN_SIDEBAR.map((field) => (
          <SidebarLink link={field} key={field.key} />
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
