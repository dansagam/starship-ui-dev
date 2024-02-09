import StatCardContainer from "@/components/StatCardContainer";
import { useGetFilms } from "@/hooks/queries/useFilm";
import useTableParams from "@/hooks/useTableParams";
import OverviewTable from "@/modules/main/overview/component/OverviewTable";
import { overviewStats } from "../constants/overviewMock";
import StatCard from "../component/StatCard";

function Overview() {
  const { tableParams, setTableParams } = useTableParams();
  const { fetchingPeople, filmList } = useGetFilms({ setTableParams, params: { search: "" } });
  return (
    <div className=" grid gap-5">
      <div>
        <StatCardContainer>
          {overviewStats().map((stats, idx) => (
            <StatCard
              key={stats.title + "" + `${idx}`}
              icon={stats.icon}
              subText={stats.subText}
              title={stats.title}
              value={stats.value}
            />
          ))}
        </StatCardContainer>
      </div>
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
