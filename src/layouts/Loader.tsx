import { FaSpinner } from "react-icons/fa";

// import animation from "@/assets/images/animation.gif";
type LoaderProps = {
  showTitle?: boolean;
  title?: string;
};
const Loader = (props: LoaderProps) => {
  const { showTitle, title } = props;
  return (
    <div className=" w-full h-[calc(90vh_-_100px)]">
      {showTitle && <h1>{title}</h1>}
      <div className="grid place-items-center h-full">
        {/* <img src={animation} alt="loader" className=" w-45 h-45 object-cover" /> */}
        <FaSpinner className=" text-7xl animate-spin" />
      </div>
    </div>
  );
};

Loader.defaultProps = {
  showTitles: true,
  title: "Fetching...",
};

export default Loader;
