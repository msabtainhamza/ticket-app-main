import React from "react";

const ProgressBar = ({ label, value, color, percentage }) => {
  return (
    <div className="mb-2">
      <div className="flex justify-between items-center mb-2">
        <p className="text-white text-[12px]">{label}</p>
        <p className="text-white text-[12px]">{percentage}%</p>
      </div>
      <div className="w-full bg-[#494949] rounded-full h-[8px]">
        <div
          className={`bg-[${color}] h-[8px] rounded-full`}
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
