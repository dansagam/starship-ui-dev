import React from "react";
import { RouteObject, Outlet, useLocation, useNavigate, Navigate } from "react-router-dom";
import useAuth from "@/hooks/useAuths";
import Login from "@/modules/auth/views/Login";
import Auth from "@/api/Auth";
import { BASE_PATH } from "@/routes/routes";
import NotFound from "@/layouts/NotFound";

function getAuthRoute() {
  const { isAuthenticated } = Auth;
  if (isAuthenticated()) {
    // return BASE_PATH.OVERVIEW;
    return "_" + "/" + "overview";
  }
  return "/login";
}

const Authentication = () => {
  const { isLoggedIn } = useAuth();
  const pathname = useLocation();
  const navigate = useNavigate();
  React.useEffect(() => {
    if (isLoggedIn && pathname.pathname === "/login") {
      navigate(BASE_PATH.OVERVIEW);
    }
  }, [isLoggedIn]);

  return <Outlet />;
};
export const authRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Authentication />,
    children: [
      {
        path: "",
        element: <Navigate to={getAuthRoute()} />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "404",
    element: <NotFound />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

function AuthRoutes() {
  return <div>dddd</div>;
}

export default AuthRoutes;
