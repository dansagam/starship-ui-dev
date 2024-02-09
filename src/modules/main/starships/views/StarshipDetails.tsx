import { useParams } from "react-router-dom";
import { useGetStarship } from "@/hooks/queries/useStarship";
import { coverImgUrl } from "../constant/mock";
import { useBreadcrumb } from "@/contexts/BreadCrumbContext";
import React from "react";

function StarshipDetails() {
  const { id } = useParams();
  const { starships } = useGetStarship({ id: id || "" });
  const { setBreadcrumb } = useBreadcrumb();

  React.useEffect(() => {
    setBreadcrumb(true);
    return () => {
      setBreadcrumb(false);
    };
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr]">
        <div>
          <img src={coverImgUrl} alt="" loading="eager" />
        </div>
        <div>
          <h1 className=" font-semibold text-5xl">{starships?.name || ""}</h1>
          <p>Model: {starships?.model || ""}</p>
          <p>Passengers: {starships?.passengers || ""}</p>
          <p>Pilot: {starships?.pilots?.join(",") || ""}</p>
        </div>
      </div>
    </div>
  );
}

export default StarshipDetails;
