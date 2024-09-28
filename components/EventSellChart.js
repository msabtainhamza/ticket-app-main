"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function LineChartGraph({ data = [] }) {
  return (
    <div className="w-full h-auto max-w-[650px] md:max-w-full">
      <LineChart
        width={650}
        height={310}
        data={data}
        margin={{ left: 10, top: 10 }}
        className=" text-[#494949] font-semibold text-[16px] bg-none"
        style={{ width: "100%", height: "100%" }}
      >
        <CartesianGrid
          strokeDasharray="3 3"
          strokeWidth={0.2}
          horizontal={true}
          vertical={false}
        />
        <XAxis
          dataKey="name"
          strokeWidth={0.01}
          padding={{ left: 30, right: 20 }}
        />

        <YAxis strokeWidth={0.01} tickFormatter={(value) => `$${value}`} />

        <Tooltip
          wrapperStyle={{ borderRadius: "8px" }} // Makes the entire tooltip container rounded
          cursor={{
            stroke: "#7a844a",
            strokeWidth: 0.5,
            strokeDasharray: "3 3",
          }}
          contentStyle={{
            backgroundColor: "#8c945a",
            color: "#fff",
            borderRadius: "8px",
            border: null,
          }}
          itemStyle={{ color: "#0f0f10" }}
          labelStyle={{ color: "#fff" }}
        />
        {/* <Legend /> */}

        <Line type="linear" dataKey="Sell" stroke="#7a844a" strokeWidth={4} />
      </LineChart>
    </div>
  );
}
