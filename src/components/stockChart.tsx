import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "OPEN", value: 6 },
  { name: "GOOGL", value: 19 },
  { name: "NVDA", value: 8 },
  { name: "GTHP", value: 12 },
  { name: "APPL", value: 18 },
  { name: "TSLA", value: 28 },
];

const sortedData = [...data].sort((a, b) => b.value - a.value);

export default function StockChart() {
  return (
    <div className="h-full w-full">
      <ResponsiveContainer>
        <BarChart data={sortedData}>
          <XAxis dataKey="name" stroke="#d1d5db" />
          <YAxis stroke="#d1d5db" />
          <Tooltip cursor={{ fill: "transparent" }} />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
