import { DataTableColumnType } from "@/@types/tableInterface";
import { GetStarshipResponseData } from "@/api/responses/starship";
import DataTable from "@/shared/data-table/DataTable";
import React from "react";

type Props = Pick<
  React.ComponentProps<typeof DataTable<GetStarshipResponseData>>,
  "loading" | "dataSource" | "tableParams" | "setTableParams"
>;

function StarshipTable(props: Props) {
  const { dataSource, setTableParams, tableParams, loading } = props;
  const columns = (): DataTableColumnType<GetStarshipResponseData>[] => [
    {
      dataIndex: "name",
      filter: false,
      title: "Name",
    },
    {
      dataIndex: "model",
      filter: false,
      title: "Model",
    },
    {
      dataIndex: "starship_class",
      filter: false,
      title: "Class",
    },
    {
      dataIndex: "passengers",
      filter: false,
      title: "Passenger",
    },
    {
      dataIndex: "length",
      filter: false,
      title: "Length",
    },
    {
      dataIndex: "title",
      filter: false,
      title: "Character",
    },
  ];
  return (
    <DataTable
      dataSource={dataSource}
      tableParams={tableParams}
      loading={loading}
      setTableParams={setTableParams}
      columns={columns()}
      title="Starships"
    />
  );
}

export default StarshipTable;
