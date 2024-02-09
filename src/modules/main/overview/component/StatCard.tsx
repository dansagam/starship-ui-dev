import React from "react";

type StatCardProps = {
  title: string;
  value: number;
  icon: React.ReactNode;
  subText: string;
};
function StatCard(props: StatCardProps) {
  const { title, value, icon, subText } = props;
  return (
    <div className=" rounded-xl shadow-[0px_4px_4px_0px_#00000040] p-3 grid grid-cols-[1fr_auto] gap-y-2 grid-rows-[auto_1fr]">
      <h2 className=" font-bold text-lg text-text-main ">{title}</h2>
      <div>{icon}</div>
      <div>
        <h3 className=" font-bold text-lg text-text-main ">{value}</h3>
        <h3 className=" text-[#00992B] text-[9px] leading-normal">{subText}</h3>
      </div>
    </div>
  );
}

export default StatCard;
