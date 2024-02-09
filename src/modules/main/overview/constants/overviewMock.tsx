import { FaSquare } from "react-icons/fa";

type overviewStatsProps = {
  films: number;
  starships: number;
  people: number;
  species: number;
};
export const overviewStats = (values?: overviewStatsProps) => [
  {
    title: "Films",
    subText: "20 More than than yesterday",
    value: values?.films || 0,
    icon: <FaSquare fill="#A9FFE0" className=" text-3xl" />,
  },
  {
    title: "Starship",
    subText: "20 More than than yesterday",
    value: values?.starships || 0,
    icon: <FaSquare fill="#A9C1FF" className=" text-3xl" />,
  },
  {
    title: "People",
    subText: "20 More than than yesterday",
    value: values?.people || 0,
    icon: <FaSquare fill="#FFA9EC" className=" text-3xl" />,
  },
  {
    title: "Species",
    subText: "20 More than than yesterday",
    value: values?.species || 0,
    icon: <FaSquare fill="#FDFFA9" className=" text-3xl" />,
  },
];
