import { DataTableColumnType } from "@/@types/tableInterface";
import { GetPeopleResponseData } from "@/api/responses/people";
import DataTable from "@/shared/data-table/DataTable";
import { format } from "date-fns";
import React from "react";

type Props = Pick<
  React.ComponentProps<typeof DataTable<GetPeopleResponseData>>,
  "loading" | "dataSource" | "tableParams" | "setTableParams"
>;

function PeopleTable(props: Props) {
  const { dataSource, setTableParams, tableParams, loading } = props;
  const columns = (): DataTableColumnType<GetPeopleResponseData>[] => [
    {
      dataIndex: "name",
      filter: false,
      title: "Name",
    },
    {
      dataIndex: "birth_year",
      filter: false,
      title: "Birth Year",
    },
    {
      dataIndex: "gender",
      filter: false,
      title: "Gender",
    },
    {
      dataIndex: "hair_color",
      filter: false,
      title: "Hair Color",
    },
    {
      dataIndex: "height",
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
      title="People"
    />
  );
}

export default PeopleTable;
