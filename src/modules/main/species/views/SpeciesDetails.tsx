import { useParams } from "react-router-dom";
import { coverImgUrl } from "../constant/mock";
import { useGetSpecies } from "@/hooks/queries/useSpecies";
import { useBreadcrumb } from "@/contexts/BreadCrumbContext";
import React from "react";

function SpeciesDetails() {
  const { id } = useParams();
  const { species } = useGetSpecies({ id: id || "" });
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
          <h1 className=" font-semibold text-5xl">{species?.name || ""}</h1>
          <p>Designation: {species?.designation || ""}</p>
          <p>Language: {species?.language || ""}</p>
          <p>Eye Color: {species?.eye_colors || ""}</p>
          <p>Average Lifespan: {species?.average_lifespan || ""}</p>
        </div>
      </div>
    </div>
  );
}

export default SpeciesDetails;
