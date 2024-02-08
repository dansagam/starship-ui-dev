import { MdOutlineNotifications } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";

function ProfileTab() {
  return (
    <div className=" flex items-center w-full justify-end gap-5">
      <button>
        <MdOutlineNotifications />
      </button>
      <div className=" flex gap-1 items-center">
        Avatar
        <p>Johb Doe</p>
      </div>
      <button>
        <BsThreeDots />
      </button>
    </div>
  );
}

export default ProfileTab;
