import { useGetFilmDetail } from "@/hooks/queries/useFilm";
import { format } from "date-fns";
import { useParams } from "react-router-dom";
import { coverImgUrl } from "../constants/overviewMock";
import { useBreadcrumb } from "@/contexts/BreadCrumbContext";
import React from "react";

function OverviesDetail() {
  const { id } = useParams();
  const { film } = useGetFilmDetail({ id: id || "" });
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
          <h1 className=" font-semibold text-5xl">{film?.title || ""}</h1>
          <p>Director: {film?.director || ""}</p>
          <p>Producer: {film?.producer || ""}</p>
          <p>Release Date: {film?.release_date ? format(new Date(film.release_date), "Pp") : ""}</p>
        </div>
      </div>
    </div>
  );
}

export default OverviesDetail;
