import { RouteObject } from "react-router-dom";
import Overview from "@/modules/main/overview/views/Overview";
import OverviesDetail from "../views/OverviesDetail";
import NotFound from "@/layouts/NotFound";

const baseOverviewRoute: RouteObject[] = [
  {
    path: "",
    element: <Overview />,
  },
  {
    path: ":id",
    element: <OverviesDetail />,
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

export default baseOverviewRoute;
