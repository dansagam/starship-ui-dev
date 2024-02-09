import { useParams } from "react-router-dom";
import { useGetPerson } from "@/hooks/queries/usePeople";
import { coverImgUrl } from "../constant/mock";
import React from "react";
import { useBreadcrumb } from "@/contexts/BreadCrumbContext";

function Person() {
  const { id } = useParams();
  const { person } = useGetPerson({ id: id || "" });
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
          <h1 className=" font-semibold text-5xl">{person?.name || ""}</h1>
          <p>Gender: {person?.gender || ""}</p>
          <p>Year of birth: {person?.birth_year || ""}</p>
          <p>Skin Color: {person?.skin_color || ""}</p>
          <p>Height: {person?.height || ""}</p>
        </div>
      </div>
    </div>
  );
}

export default Person;
