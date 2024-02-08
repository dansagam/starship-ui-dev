import React from "react";
import useTableParams from "@/hooks/useTableParams";
import PeopleTable from "@/modules/main/peoples/component/PeopleTable";

function People() {
  const { tableParams, setTableParams } = useTableParams();
  return (
    <div className=" grid">
      <PeopleTable tableParams={tableParams} setTableParams={setTableParams} dataSource={[]} />
    </div>
  );
}

export default People;
