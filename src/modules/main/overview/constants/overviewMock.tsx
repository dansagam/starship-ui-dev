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

export const coverImgUrl =
  "https://s3-alpha-sig.figma.com/img/7f47/9952/cafe7202d167a9b62c7e513e120918b8?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XBK9-YF5SkTvL5yYbjqSj164sfYxlASitl3Ssjdop156cs9ooPHBzGd-1jn5UmnTQTewHe-~Bofcsq6lqtAW3bg4VI-KcmSEZUXI~XY0A2Vjr0WeepjHDgcHFfapjlpCA2fcpvUNt7XrH1hYkeX6YBQCcAWeDNkoAHu1PSn~ORV37cAOBOFmzVxOOvqdWOhpz-cP2nZYEAUbvZ2sJ1IjyeB4CvsqoJBpnCEApi6yFrH6M2aPmwS4pgaz8AQUPSIIzK0Mq7RvLJXWN8-PPnCyUds0v39tv8BUD4lEZS8tWhkhBNYQTyEZlT3VytHXJIh0hMwtXhPZecilvH2SsmoiUg__";
