import { IChildren, Prettify } from "@/@types/baseInterface";
import bgImg from "@/assets/image/auth-log.png";
import Button from "@/shared/button/Button";
import { Link } from "react-router-dom";

type AuthLayoutProps = Prettify<
  {
    title: string;
    subTitle: string;
    nextLink: string;
    nextLinkText: string;
    actionText: string;
    onAction(): void;
  } & IChildren
>;

function AuthLayout(props: AuthLayoutProps) {
  const { children, actionText, nextLink, subTitle, title, onAction, nextLinkText } = props;
  return (
    <div className=" h-screen w-full">
      <div className="grid grid-cols-1 gap-2 md:grid-cols-[1fr_2fr] h-full">
        <div className=" hidden  bg-sidebar-main md:flex items-center px-4">
          <img src={bgImg} alt="background-image" />
        </div>
        <div className=" grid place-items-center">
          <div className=" w-full md:max-w-[28rem] min-w-56 border border-primary-border rounded-lg py-4 px-6 ">
            <div className="grid grid-rows-[auto_1fr_auto] gap-4 min-h-[400px]">
              <div>
                <h3 className=" font-semibold text-2xl text-text-main_2">{title}</h3>
                <p className=" text-[#737373] font-normal text-base">{subTitle}</p>
              </div>
              <div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault(); // prevent reloading
                    onAction();
                  }}
                  className=" grid grid-rows-[1fr_auto] gap-3 place-items-center"
                >
                  <div className=" w-full">{children}</div>
                  <Button className=" w-full">{actionText}</Button>
                </form>
                <Link className=" text-primary-main text-center" to={nextLink}>
                  {nextLinkText}
                </Link>
              </div>
              <p className=" text-xs text-text-3 text-center">
                <span className=" underline text-[#303B54]">Privacy Policy</span> and{" "}
                <span className=" underline text-[#303B54]">Term of Services</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
