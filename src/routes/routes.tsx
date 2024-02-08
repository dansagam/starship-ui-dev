import { authRoutes } from "@/modules/auth/routes";
import baseOverviewRoute from "@/modules/main/overview/routes/overviewRoutes";

import { RouteObject, Outlet } from "react-router-dom";
export type BaseRoutesType = {
  path: string;
  exact?: boolean;
  element: React.LazyExoticComponent<() => JSX.Element>;
  isAuthenticated?: boolean;
};
export const BASE_PATH = {
  OVERVIEW: "_" + "/" + "overview",
  STARSHIP: "_" + "/" + "starship",
  PEOPLE: "_" + "/" + "people",
  SPECIES: "_" + "/" + "species",
} as const;

export const MODIFY_BATH_PATH = {
  OVERVIEW: "overview",
  STARSHIP: "starship",
  PEOPLE: "people",
  SPECIES: "species",
};

export const mainRoutes: RouteObject[] = [
  {
    path: MODIFY_BATH_PATH.OVERVIEW,
    element: <Outlet />,
    children: baseOverviewRoute,
  },
  {
    path: MODIFY_BATH_PATH.PEOPLE,
    element: <Outlet />,
    children: baseOverviewRoute,
  },
  {
    path: MODIFY_BATH_PATH.STARSHIP,
    element: <Outlet />,
    children: baseOverviewRoute,
  },
  {
    path: MODIFY_BATH_PATH.SPECIES,
    element: <Outlet />,
    children: baseOverviewRoute,
  },
];

export const baseAuthRoutes: RouteObject = {
  path: "/",
  element: <Outlet />,
  children: authRoutes,
};
