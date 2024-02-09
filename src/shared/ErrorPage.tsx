import questionMark from "@/assets/images/question-mark.png";
import { useNavigate } from "react-router-dom";
import Button from "./button/Button";

function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div className="bg-white w-full h-[100vh]">
      <div className="h-[100vh] px-[5vw] flex flex-row items-center justify-center ">
        <div className="w-fit flex flex-col gap-4 items-start justify-center">
          <h2 className="text-4xl text-[rgb(15,_38,_87)] lg:text-5xl">Something&apos;s wrong here...</h2>
          <p className="text-lg font-thin text-[rgb(15,_38,_87)] lg:text-xl">
            We can&apos;t find the page you&apos;re looking for. Check out our Help Center or head back to home.
          </p>
          <div className="w-full gap-3 flex items-center">
            <Button>Help</Button>
            <Button
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Button>
          </div>
        </div>
        <img src={questionMark} alt="Error..." className="hidden md:block" />
      </div>
    </div>
  );
}

export default ErrorPage;
