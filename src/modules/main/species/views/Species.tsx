import React from "react";
import useTableParams from "@/hooks/useTableParams";
import SpeciesTable from "@/modules/main/species/component/SpeciesTable";

function Species() {
  const { tableParams, setTableParams } = useTableParams();
  return (
    <div className=" grid">
      <SpeciesTable tableParams={tableParams} setTableParams={setTableParams} dataSource={[]} />
    </div>
  );
}

export default Species;
