import { RouteObject } from "react-router-dom";
import Species from "../views/Species";
import SpeciesDetails from "../views/SpeciesDetails";
import NotFound from "@/layouts/NotFound";

const baseSpeciesRoute: RouteObject[] = [
  {
    path: "",
    element: <Species />,
  },
  {
    path: ":id",
    element: <SpeciesDetails />,
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

export default baseSpeciesRoute;
