import { RouteObject } from "react-router-dom";
import Species from "../views/Species";

const baseSpeciesRoute: RouteObject[] = [
  {
    path: "",
    element: <Species />,
  },
];

export default baseSpeciesRoute;
