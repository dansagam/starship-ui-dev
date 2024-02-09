import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { MdClose } from "react-icons/md";
import { twMerge } from "tailwind-merge";
import Button from "../button/Button";

interface IDrawer {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  option?: string;
  width?: string;
  anchor?: "right" | "left";
  onAction?: () => void;
  onSeconAction?: () => void;
  isFooter?: boolean;
  fullWidth?: boolean;
  actionText?: string;
  secActionText?: string;
  isSecCancel?: boolean;
  actionSeverity?: "primary";
  secActionSeverity?: "primary";
  loading?: boolean;
  secActionClassName?: string;
  containerClassName?: string;
  childClassName?: string;
  ActionButton?: React.ComponentProps<typeof Button>;
  SecActionButton?: React.ComponentProps<typeof Button>;
}
const Drawer = ({
  open,
  onClose,
  title,
  children,
  anchor = "right",
  // eslint-disable-next-line no-unused-vars
  // width = "380px",
  isFooter,
  fullWidth,
  onAction,
  onSeconAction,
  actionText,
  secActionText,
  isSecCancel,
  actionSeverity,
  secActionSeverity,
  secActionClassName,
  containerClassName,
  loading,
  childClassName,
  ActionButton,
  SecActionButton,
}: IDrawer) => {
  const [bodyOverflow, setBodyOverflow] = useState("");

  useEffect(() => {
    if (open) {
      setBodyOverflow(document.body.style.overflow);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = bodyOverflow;
    };
  }, [open]);

  const closeDrawer = () => {
    document.body.style.overflow = bodyOverflow;
    onClose();
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <div role="presentation" className="app-drawer-root">
          <div
            onClick={closeDrawer}
            className={` ${open ? "block" : "hidden"} left-0  transition-opacity duration-200 ${
              open ? "opacity-30" : "opacity-0"
            } w-[100%] h-[100vh] bg-black fixed top-0 z-10`}
          />

          <div
            // style={{ width: width }}
            className={twMerge(
              "bg-white md:w-[520px] sm:w-[60vw] h-screen rounded-3xl fixed top-0 z-[350] transition-transform duration-700 transform",
              !fullWidth && " max-w-md",
              anchor === "right" ? "right-0" : "left-0",
              anchor === "right" ? ` ${open ? "" : "translate-x-full"}` : ` ${open ? "" : "-translate-x-full"}`
            )}
          >
            <div
              className={twMerge(
                `relative h-full w-full grid items-stretch overflow-auto grid-rows-[auto_1fr_70px]`,
                containerClassName
              )}
              // style={{ gridTemplateRows: "auto 1fr 70px" }}
            >
              {title && (
                <div className=" flex justify-between items-center border-b p-4 z-[2]">
                  <p className="text-base  flex-1 font-bold">{title}</p>
                  <button onClick={closeDrawer}>
                    <MdClose />
                  </button>
                </div>
              )}
              {/* <hr /> */}
              <div className={twMerge("p-4 flex-1  ", childClassName)}>{children}</div>
              {isFooter && (
                <div className="bg-[#F1F4F6]  rounded-bl-3xl sticky bottom-0 grid items-center px-4 z-[2]">
                  <div className="flex justify-end items-center gap-2 ">
                    <div className="flex gap-4">
                      <Button
                        color={secActionSeverity || "primary"}
                        className={secActionClassName}
                        loading={loading}
                        onClick={() => {
                          if (loading) {
                            return;
                          } else {
                            if (isSecCancel) {
                              onClose();
                            } else {
                              if (onSeconAction) {
                                onSeconAction();
                              }
                            }
                          }
                        }}
                        {...SecActionButton}
                      >
                        {secActionText || "Cancel"}
                      </Button>
                      {actionText && (
                        <Button
                          color={actionSeverity || "primary"}
                          disabled={loading}
                          loading={loading}
                          onClick={() => {
                            if (loading) {
                              return;
                            } else {
                              if (onAction) {
                                onAction();
                              }
                            }
                          }}
                          {...ActionButton}
                        >
                          {actionText}
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>,
        document.body
      )}
    </React.Fragment>
  );
};
Drawer.defaultProps = {
  actionSeverity: "secondary",
  secActionSeverity: "secondary",
};
export default Drawer;

// <div
// // style={{ width: width }}
// className={` bg-white md:w-[520px] w-full h-screen fixed top-0 z-[350] ${
//   anchor === "right" ? "right-0" : "left-0"
// } transition-transform duration-200 transform ${!fullWidth && " max-w-md"} ${
//   anchor === "right"
//     ? ` ${open ? "" : "translate-x-full"}`
//     : ` ${open ? "" : "-translate-x-full"}`
// }`}
// >
