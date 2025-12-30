import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CartesianGrid, Line, LineChart, XAxis, YAxis, Label } from "recharts";

const chartData = [
  { date: "", average: 2.0, month: 4.0 },
  { date: "Aug 1", average: 2.6, month: 3.8 },
  { date: "", average: 1.5, month: 4.5 },
  { date: "Aug 8", average: 2.2, month: 3.4 },
  { date: "", average: 2.3, month: 3.1 },
  { date: "", average: 1.8, month: 2.6 },
  { date: "Aug 15", average: 2.7, month: 4.2 },
  { date: "", average: 2.1, month: 3.0 },
  { date: "", average: 2.9, month: 4.6 },
  { date: "Aug 30", average: 2.5, month: 4.8 },
];

const chartConfig = {
  average: {
    label: "Average Trend",
    color: "#E3C5A7",
  },
  month: {
    label: "This Month",
    color: "#50AEA8",
  },
} satisfies ChartConfig;

export default function AdministratorLineChart() {
  return (
    <div className="absolute top-85 ml-52 w-299">
      <Card className="h-75 w-294 shadow-none border-none">
        <CardHeader>
          <CardTitle className="text-black text-[16px] font-[700] sansfont">
            Risk Trends
          </CardTitle>
          <div className="flex gap-3 mt-2">
            <div className="flex items-center gap-2 text-sm text-black">
              <span className="w-2 h-2 bg-[#E3C5A7]" />
              <h1 className="text-[#6C6C6C] text-[14px] font-[400] sansfont">
                Average Trend
              </h1>
            </div>
            <div className="flex items-center gap-2 text-sm text-black">
              <span className="w-2 h-2 bg-[#50AEA8]" />
              <h1 className="text-[#6C6C6C] text-[14px] font-[400] sansfont">
                This Month
              </h1>
            </div>
          </div>
        </CardHeader>
        <CardContent className="h-[185px] w-[1196px]">
          <ChartContainer
            config={chartConfig}
            className="h-full w-full [&_.recharts-text]:fill-black"
          >
            <LineChart data={chartData} width={1100} height={260} margin={{  left: 18 }}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="date" tickLine={false} axisLine={false} />
              <YAxis
                domain={[1, 5]}
                ticks={[1, 2, 3, 4, 5]}
                tickMargin={4}
                tick={{ fontSize: 12, fill: "#000000" }}
                tickFormatter={(v) =>
                  ["Low", "Moderate", "Elevated", "High", "Crisis"][v - 1]
                }
                tickLine={false}
                axisLine={false}
              >
                <Label
                  value="Risk"
                  angle={-90}
                  position="left"
                  offset={12}
                  fill="#6C6C6C"
                  style={{ fill: "#6C6C6C" }}
                  fontSize={14}
                  fontWeight={400}
                />
              </YAxis>
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line
                type="monotone"
                dataKey="average"
                stroke="#E3C5A7"
                strokeWidth={3}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="month"
                stroke="#50AEA8"
                strokeWidth={3}
                dot={false}
              />
            </LineChart>
          </ChartContainer>
          <div className="text-[14px] font-[400] text-[#6C6C6C] ml-271 flex flex-row">
            <h1>This month</h1>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
