import { RouteObject } from "react-router-dom";
import Overview from "@/modules/main/overview/views/Overview";

const baseOverviewRoute: RouteObject[] = [
  {
    path: "",
    element: <Overview />,
  },
];

export default baseOverviewRoute;
