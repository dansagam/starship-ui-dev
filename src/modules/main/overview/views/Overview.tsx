import useTableParams from "@/hooks/useTableParams";
import OverviewTable from "@/modules/main/overview/component/OverviewTable";

function Overview() {
  const { tableParams, setTableParams } = useTableParams();
  return (
    <div className=" grid">
      <OverviewTable tableParams={tableParams} setTableParams={setTableParams} dataSource={[]} />
    </div>
  );
}

export default Overview;
