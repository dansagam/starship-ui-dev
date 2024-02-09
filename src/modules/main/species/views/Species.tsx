import { useGetSpeciesList } from "@/hooks/queries/useSpecies";
import useTableParams from "@/hooks/useTableParams";
import SpeciesTable from "@/modules/main/species/component/SpeciesTable";

function Species() {
  const { tableParams, setTableParams } = useTableParams();
  const { speciesList, fetchingSpecies } = useGetSpeciesList({
    setTableParams,
    params: { search: tableParams.search },
  });
  return (
    <div className=" grid">
      <SpeciesTable
        tableParams={tableParams}
        setTableParams={setTableParams}
        dataSource={speciesList}
        loading={fetchingSpecies}
      />
    </div>
  );
}

export default Species;
