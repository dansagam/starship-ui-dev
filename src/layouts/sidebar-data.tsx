import { BASE_PATH } from "@/routes/routes";
import { FaSquare } from "react-icons/fa";
import { MdWindow } from "react-icons/md";
import { ILinkProps } from "./SidebarLink";

export const OVERVIEW_SIDEBAR: Array<ILinkProps> = [
  {
    path: BASE_PATH.OVERVIEW,
    icon: <MdWindow className=" text-3xl" />,
    key: "overview",
    label: "Overview",
  },
];

export const MAIN_SIDEBAR: Array<ILinkProps> = [
  {
    path: BASE_PATH.STARSHIP,
    icon: <FaSquare fill="#A9C1FF" className=" text-3xl" />,
    key: "starship",
    label: "Starship",
  },
  {
    path: BASE_PATH.PEOPLE,
    icon: <FaSquare fill="#FFA9EC" className=" text-3xl" />,
    key: "people",
    label: "People",
  },
  {
    path: BASE_PATH.SPECIES,
    icon: <FaSquare fill="#FDFFA9" className=" text-3xl" />,
    key: "species",
    label: "Species",
  },
];

export const sidebar_logo =
  "https://s3-alpha-sig.figma.com/img/e4eb/34f7/771c40c1e2baeb7e0dbe7d6e97a00350?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OuD9mAJBrEutbfYtQ1z3OESgL7jZpFwD0rO16H0iFbIDFBUkFsFl~yTCVMnrSvfsrKQBn7JfdzkF~jBSB3hdpU0GeTg0S9SQ-YviYHOaC-6jRRq9QhrEVPZ5bEwlr1eS-MHUNu2M~0HE~mJIs3vWZmd7l6weJIoEJxmj6Pqv6tlvxhH5YChvruf2dnX3Ad~X0YYC8yu8l1WIZspTVjnExnniZYXmSx~ByKmhFiIIHy~HtZHnwxBjgY7Tq~dGZWR~v85fv0uwN~xYQlGU9xXOo~uyeowkkUPUl2zXA8E0yZ442VuhRB~oW3rHAXvVG4Z7c9X5gHgcVRldFG-uL9HQvw__";
