import { RouteObject } from "react-router-dom";
import Overview from "@/modules/main/overview/views/Overview";
import OverviesDetail from "../views/OverviesDetail";

const baseOverviewRoute: RouteObject[] = [
  {
    path: "",
    element: <Overview />,
  },
  {
    path: ":id",
    element: <OverviesDetail />,
  },
];

export default baseOverviewRoute;
