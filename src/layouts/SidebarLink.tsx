import React from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

export type ILinkProps = {
  key: string;
  label: string;
  path: string;
  icon: React.ReactNode;
};

type SidebarLinkProps = {
  link: ILinkProps;
};

function SidebarLink(props: SidebarLinkProps) {
  const { link } = props;
  const { pathname } = useLocation();
  console.log({ pathname, link });
  return (
    <div className=" relative">
      <Link
        data-app-active={pathname.includes(link.path)}
        to={link.path}
        className={classNames(
          " flex justify-start relative transition-all duration-700 bg-blend-saturation items-center gap-2 md:py-2 md:px-3 min-h-11 h-12 hover:bg-primary-main text-white font-semibold text-base hover:rounded-md",
          // "before:content-[''] before:h-full before:absolute before:left-0 before:bottom-0 w-0 before:hover:w-full before:transition-all before:duration-500 before:bg-primary-main",
          "data-[app-active=true]:bg-primary-main data-[app-active=true]:rounded-md "
        )}
      >
        <span className=" block flex-col justify-center items-center">
          <span>{link.icon}</span>
          <span className=" min-[520px]:block md:hidden hidden">{link.label}</span>
        </span>
        <span className=" min-[520px]:hidden md:block block">{link.label}</span>
      </Link>
    </div>
  );
}

export default SidebarLink;
