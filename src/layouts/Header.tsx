import { useBreadcrumb } from "@/contexts/BreadCrumbContext";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import ProfileTab from "./ProfileTab";
import { useLayoutContext } from "@/contexts/LayoutContext/LayoutContext";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Header() {
  const { breadcrumb } = useBreadcrumb();
  const { sideBar, handleToggle } = useLayoutContext();
  const navigate = useNavigate();
  return (
    <header className=" sticky top-0 z-10 bg-white flex items-center py-6 px-4 justify-between shadow-[0px_2px_6px_0px_rgba(229,229,229,0.3)]">
      <div className="flex items-center gap-3">
        <div className="sm:hidden flex items-center">
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (handleToggle) {
                handleToggle();
              }
            }}
          >
            {sideBar ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
        {breadcrumb && (
          <div className=" flex items-center">
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
