import { Outlet, RouteObject, createBrowserRouter } from "react-router-dom";
import { baseAuthRoutes, mainRoutes } from "./routes";
import React from "react";
import ProtectedRoutes from "./ProtectedRoutes";
import Loader from "@/layouts/Loader";
import Layout from "@/layouts/Layout";
import BreadCrumbProvider from "@/contexts/BreadCrumbContext";

export const tranformRouteObject = (route: RouteObject) => {
  const ProtectComponent = React.Fragment;
  const transformedObject: RouteObject = {
    ...route,
    element: (
      <React.Suspense fallback={<Loader />}>
        <ProtectComponent>{route.element}</ProtectComponent>
      </React.Suspense>
    ),
  };
  return transformedObject;
};

const BaseRouteContext = () => {
  return (
    <ProtectedRoutes>
      <BreadCrumbProvider>
        <Layout>
          <Outlet />
        </Layout>
      </BreadCrumbProvider>
    </ProtectedRoutes>
  );
};

const router = createBrowserRouter([
  tranformRouteObject(baseAuthRoutes),
  {
    path: "_",
    element: (
      <React.Suspense fallback={<Loader />}>
        <BaseRouteContext />
      </React.Suspense>
    ),
    children: mainRoutes,
  },
]);

export default router;
