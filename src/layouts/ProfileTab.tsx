import { MdOutlineNotifications } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import Avatar from "@/shared/avatar/Avatar";
import linru from "@/assets/svg/account.svg";
import { useGetuserDetail } from "@/hooks/queries/useUser";

function ProfileTab() {
  const { user } = useGetuserDetail({ id: "1" });
  return (
    <div className=" flex items-center w-full justify-end gap-5 min-w-[250px]">
      <button>
        <MdOutlineNotifications />
      </button>
      <div className=" flex gap-1 items-center">
        <Avatar src={linru} />
        <p>{user?.full_name || ""}</p>
      </div>
      <button>
        <BsThreeDots />
      </button>
    </div>
  );
}

export default ProfileTab;
