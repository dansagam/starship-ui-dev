import React from "react";
import useTableParams from "@/hooks/useTableParams";
import StarshipTable from "@/modules/main/starships/component/StarshipTable";

function Starship() {
  const { tableParams, setTableParams } = useTableParams();
  return (
    <div className=" grid">
      <StarshipTable tableParams={tableParams} setTableParams={setTableParams} dataSource={[]} />
    </div>
  );
}

export default Starship;
