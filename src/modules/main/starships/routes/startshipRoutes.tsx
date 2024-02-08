import { RouteObject } from "react-router-dom";
import Starship from "../views/Starship";

const baseStarshiptRoute: RouteObject[] = [
  {
    path: "",
    element: <Starship />,
  },
];

export default baseStarshiptRoute;
