import { RouteObject } from "react-router-dom";
import Starship from "../views/Starship";
import StarshipDetails from "../views/StarshipDetails";

const baseStarshiptRoute: RouteObject[] = [
  {
    path: "",
    element: <Starship />,
  },
  {
    path: ":id",
    element: <StarshipDetails />,
  },
];

export default baseStarshiptRoute;
