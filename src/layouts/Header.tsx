// import React from "react";
import { useBreadcrumb } from "@/contexts/BreadCrumbContext";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import ProfileTab from "./ProfileTab";

function Header() {
  const { breadcrumb } = useBreadcrumb();
  const navigate = useNavigate();
  return (
    <header className=" sticky top-0 z-10 bg-white flex items-center py-6 px-4 justify-between shadow-[0px_2px_6px_0px_rgba(229,229,229,0.3)]">
      <div>
        {breadcrumb && (
          <div>
            <IoIosArrowBack
              onClick={() => {
                navigate(-1);
              }}
              className=" cursor-pointer"
            />
            Back
          </div>
        )}
      </div>
      <div className=" flex justify-end items-center min-w-[280px]">
        <ProfileTab />
      </div>
    </header>
  );
}

export default Header;
