import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Label,
  LabelList,
} from "recharts";
import { Card } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { severity: "Crisis", Users: 18, fill: "#50AEA8" },
  { severity: "High", Users: 22, fill: "#FF725C" },
  { severity: "Moderate", Users: 18, fill: "#6766DE" },
  { severity: "Elevated", Users: 30, fill: "#D39D36" },
  { severity: "Low", Users: 30, fill: "#25D255" },
];

export default function ClinicBarchart() {
  return (
    <div className="h-100 w-140 p-4 relative">
      <div className="flex items-center gap-2">
        <h1 className="text-[16px] font-[700] sansfont ml-5">
          Risk Levels by Severity
        </h1>
      </div>
      <Card className="shadow-none border-none absolute left-8">
        <ChartContainer className="h-[250px] w-[470px] text-black" config={{}}>
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 20, left: 20, bottom: 40 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              tick={{ fill: "#000000" }}
              dataKey="severity"
              tickLine={false}
              axisLine={false}
            >
              <Label
                className="text-[14px] font-[400]"
                value="Risk Severity"
                position="bottom"
                offset={12}
                fill="#6C6C6C"
              />
            </XAxis>
            <YAxis
              domain={[0, 50]}
              ticks={[0, 10, 20, 30, 40, 50]}
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#000000" }}
            >
              <Label
                className="text-[14px] font-[400]"
                value="Users"
                angle={-90}
                position="left"
                offset={0}
                fill="#6C6C6C"
              />
            </YAxis>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Bar dataKey="Users" radius={0}>
              <LabelList
                fill="#000000"
                dataKey="Users"
                position="top"
                className="text-[14px] font-[400]"
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </Card>
    </div>
  );
}
