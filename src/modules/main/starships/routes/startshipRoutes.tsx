import { RouteObject } from "react-router-dom";
import Starship from "../views/Starship";
import StarshipDetails from "../views/StarshipDetails";
import NotFound from "@/layouts/NotFound";

const baseStarshiptRoute: RouteObject[] = [
  {
    path: "",
    element: <Starship />,
  },
  {
    path: ":id",
    element: <StarshipDetails />,
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

export default baseStarshiptRoute;
