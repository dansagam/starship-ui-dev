import { DataTableColumnType } from "@/@types/tableInterface";
import { GetPeopleResponseData } from "@/api/responses/people";
import DataTable from "@/shared/data-table/DataTable";
import React from "react";

type Props = Pick<
  React.ComponentProps<typeof DataTable<GetPeopleResponseData>>,
  "loading" | "dataSource" | "tableParams" | "setTableParams"
>;

function StarshipTable(props: Props) {
  const { dataSource, setTableParams, tableParams, loading } = props;
  const columns = (): DataTableColumnType<GetPeopleResponseData>[] => [];
  return (
    <DataTable
      dataSource={dataSource}
      tableParams={tableParams}
      loading={loading}
      setTableParams={setTableParams}
      columns={columns()}
    />
  );
}

export default StarshipTable;
