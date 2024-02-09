import { useGetFilms } from "@/hooks/queries/useFilm";
import useTableParams from "@/hooks/useTableParams";
import OverviewTable from "@/modules/main/overview/component/OverviewTable";

function Overview() {
  const { tableParams, setTableParams } = useTableParams();
  const { fetchingPeople, filmList } = useGetFilms({ setTableParams, params: { search: "" } });
  return (
    <div className=" grid">
      <OverviewTable
        tableParams={tableParams}
        setTableParams={setTableParams}
        dataSource={filmList}
        loading={fetchingPeople}
      />
    </div>
  );
}

export default Overview;
