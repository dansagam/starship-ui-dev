import { useGetPeople } from "@/hooks/queries/usePeople";
import useTableParams from "@/hooks/useTableParams";
import PeopleTable from "@/modules/main/peoples/component/PeopleTable";

function People() {
  const { tableParams, setTableParams } = useTableParams();
  const { peopleList, fetchingPeople } = useGetPeople({ setTableParams });
  return (
    <div className=" grid">
      <PeopleTable
        tableParams={tableParams}
        setTableParams={setTableParams}
        dataSource={peopleList}
        loading={fetchingPeople}
      />
    </div>
  );
}

export default People;
