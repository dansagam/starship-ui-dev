import { useGetStarships } from "@/hooks/queries/useStarship";
import useTableParams from "@/hooks/useTableParams";
import StarshipTable from "@/modules/main/starships/component/StarshipTable";

function Starship() {
  const { tableParams, setTableParams } = useTableParams();
  const { fetchingStarship, starshipsList } = useGetStarships({
    setTableParams,
    params: { search: tableParams.search },
  });
  return (
    <div className=" grid">
      <StarshipTable
        tableParams={tableParams}
        setTableParams={setTableParams}
        dataSource={starshipsList}
        loading={fetchingStarship}
      />
    </div>
  );
}

export default Starship;
