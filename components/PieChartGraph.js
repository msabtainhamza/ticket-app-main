import { PieChart, Pie, Cell, Label } from "recharts";

const colors = ["#ffffff", "#8c945a", "#494949"];
const data = [
  { name: "Tickets", value: 8234.19 },
  { name: "Fee", value: 1734.99 },
  { name: "Provider Fee", value: 1215.17 },
];

export default function SimplePieChart() {
  return (
    <PieChart width={310} height={260}>
      {/* Outer Pie */}
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={80}
        fill="#82ca9d"
        stroke="none"
      >
        {data.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={colors[index % colors.length]}
            cornerRadius={20}
          />
        ))}
      </Pie>

      {/* Inner Pie (for filled circle) */}
      <Pie
        data={[{ name: "Center", value: 100 }]} // Dummy data
        cx="50%"
        cy="50%"
        innerRadius={0}
        outerRadius={47}
        fill="#2c2c2c" // Color for the inner circle
        stroke="none"
        isAnimationActive={false} // Optional: Disable animation
      >
        {/* Label in the center */}
        <Label
          value="Total Sell: 23,876"
          position="center"
          fill="white" // Color of the text
          style={{ fontSize: "10px", fontWeight: "normal" }} // Customize the text style
        />
      </Pie>
    </PieChart>
  );
}
