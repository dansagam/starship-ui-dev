import { RouteObject } from "react-router-dom";
import Species from "../views/Species";
import SpeciesDetails from "../views/SpeciesDetails";

const baseSpeciesRoute: RouteObject[] = [
  {
    path: "",
    element: <Species />,
  },
  {
    path: ":id",
    element: <SpeciesDetails />,
  },
];

export default baseSpeciesRoute;
