import { DataTableColumnType } from "@/@types/tableInterface";
import { GetFilmReponseTypeResponseData } from "@/api/responses/films";
import DataTable from "@/shared/data-table/DataTable";
import { format } from "date-fns";
import React from "react";

type Props = Pick<
  React.ComponentProps<typeof DataTable<GetFilmReponseTypeResponseData>>,
  "loading" | "dataSource" | "tableParams" | "setTableParams"
>;

function OverviewTable(props: Props) {
  const { dataSource, setTableParams, tableParams, loading } = props;
  const columns = (): DataTableColumnType<GetFilmReponseTypeResponseData>[] => [
    {
      dataIndex: "title",
      filter: false,
      title: "Film Title",
    },
    {
      dataIndex: "release_date",
      filter: false,
      title: "Release Date",
      render(_row, col) {
        return <div>{col?.release_date ? format(col.release_date, "d/MM/yy") : "--"}</div>;
      },
    },
    {
      dataIndex: "title",
      filter: false,
      title: "Director",
    },
    {
      dataIndex: "title",
      filter: false,
      title: "Producer",
    },
    {
      dataIndex: "title",
      filter: false,
      title: "Episode ID",
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
      title="Films"
    />
  );
}

export default OverviewTable;
