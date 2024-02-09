import { RouteObject } from "react-router-dom";
import People from "../views/People";
import Person from "../views/Person";
import NotFound from "@/layouts/NotFound";

const basePeopleRoute: RouteObject[] = [
  {
    path: "",
    element: <People />,
  },
  {
    path: ":id",
    element: <Person />,
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

export default basePeopleRoute;
