import { DataTableColumnType } from "@/@types/tableInterface";
import { GetSpeciesResponseData } from "@/api/responses/species";
import DataTable from "@/shared/data-table/DataTable";
import { format } from "date-fns";
import React from "react";
import { useNavigate } from "react-router-dom";

type Props = Pick<
  React.ComponentProps<typeof DataTable<GetSpeciesResponseData>>,
  "loading" | "dataSource" | "tableParams" | "setTableParams"
>;

function SpeciesTable(props: Props) {
  const { dataSource, setTableParams, tableParams, loading } = props;
  const navigate = useNavigate();
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
      onRowClick={(values) => {
        const arr = values.url.split("/");
        const id = arr[arr.length - 2];
        navigate(id);
      }}
    />
  );
}

export default SpeciesTable;
