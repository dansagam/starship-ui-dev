import { RouteObject } from "react-router-dom";
import People from "../views/People";
import Person from "../views/Person";

const basePeopleRoute: RouteObject[] = [
  {
    path: "",
    element: <People />,
  },
  {
    path: ":id",
    element: <Person />,
  },
];

export default basePeopleRoute;
