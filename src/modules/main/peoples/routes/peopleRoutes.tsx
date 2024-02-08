import { RouteObject } from "react-router-dom";
import People from "../views/People";

const basePeopleRoute: RouteObject[] = [
  {
    path: "",
    element: <People />,
  },
];

export default basePeopleRoute;
