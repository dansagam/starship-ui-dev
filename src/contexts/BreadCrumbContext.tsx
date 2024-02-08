import { IChildren, ISetState } from "@/@types/baseInterface";
import React from "react";

type BreadcrumbContextProps = {
  setBreadcrumb?: ISetState<boolean>;
  breadcrumb: boolean;
};
const BreadcrumbContext = React.createContext<BreadcrumbContextProps>({ breadcrumb: false });

function BreadCrumbProvider({ children }: IChildren) {
  const [breadcrumb, setBreadcrumb] = React.useState(false);
  return <BreadcrumbContext.Provider value={{ breadcrumb, setBreadcrumb }}>{children}</BreadcrumbContext.Provider>;
}

export default BreadCrumbProvider;

export const useBreadcrumb = () => {
  const { breadcrumb, setBreadcrumb } = React.useContext(BreadcrumbContext);

  if (!setBreadcrumb) {
    throw new Error("Breadcrumb context not available");
  }

  return {
    setBreadcrumb,
    breadcrumb,
  };
};
