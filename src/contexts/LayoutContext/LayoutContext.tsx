import React from "react";
import { IChildren } from "@/@types/baseInterface";

type LayoutContextProps = {
  handleToggle?: () => void;
  handleClose?: () => void;
  sideBar?: boolean;
};
const LayoutContext = React.createContext<LayoutContextProps>({});

function LayoutProvider({ children }: IChildren) {
  const [sideBar, setSideBar] = React.useState(false);
  const handleToggle = () => {
    setSideBar(true);
  };

  const handleClose = () => {
    setSideBar(false);
  };

  const value = React.useMemo(() => {
    return {
      handleToggle,
      handleClose,
      sideBar,
    };
  }, [sideBar]);
  return <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>;
}

export default LayoutProvider;

export const useLayoutContext = () => {
  const { handleClose, handleToggle, sideBar } = React.useContext(LayoutContext);
  if (!handleToggle) {
    throw new Error("Layout context is not available");
  }
  if (!handleClose) {
    throw new Error("Layout context is not available");
  }

  return {
    handleClose,
    handleToggle,
    sideBar,
  };
};
