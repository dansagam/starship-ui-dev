import { DataTableColumnType } from "@/@types/tableInterface";
import { GetSpeciesResponseData } from "@/api/responses/species";
import DataTable from "@/shared/data-table/DataTable";
import { format } from "date-fns";
import React from "react";

type Props = Pick<
  React.ComponentProps<typeof DataTable<GetSpeciesResponseData>>,
  "loading" | "dataSource" | "tableParams" | "setTableParams"
>;

function SpeciesTable(props: Props) {
  const { dataSource, setTableParams, tableParams, loading } = props;
  const columns = (): DataTableColumnType<GetSpeciesResponseData>[] => [
    {
      dataIndex: "name",
      filter: false,
      title: "Name",
    },
    {
      dataIndex: "classification",
      filter: false,
      title: "Classification",
    },
    {
      dataIndex: "eye_colors",
      filter: false,
      title: "Eye colors",
    },
    {
      dataIndex: "hair_colors",
      filter: false,
      title: "Hair Color",
    },
    {
      dataIndex: "average_height",
      filter: false,
      title: "Height",
    },
    {
      dataIndex: "created",
      filter: false,
      title: "Created",
      render(_row, col) {
        return <div>{col?.created ? format(new Date(col.created), "dd/MM/yy") : "--"}</div>;
      },
    },
  ];
  return (
    <DataTable
      dataSource={dataSource}
      tableParams={tableParams}
      loading={loading}
      setTableParams={setTableParams}
      columns={columns()}
      title="Species"
    />
  );
}

export default SpeciesTable;
