import React from "react";
import styled from "styled-components";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  YAxis,
  ReferenceLine,
} from "recharts";

const ChartContainer = styled.div`
  flex: 7;
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  padding: 10px;
  color: gray;
  display: flex;
  flex-direction: column;
`;

const ChartTitle = styled.div`
  margin-bottom: 20px;
`;

const data = [
  { name: "January", Total: 3845.22, Expense: 4274.78 },
  { name: "February", Total: 5589.59, Expense: 4684.5 },
  { name: "March", Total: 4139.5, Expense: 2328.02 },
  { name: "April", Total: 5350.4, Expense: 3671.92 },
  { name: "May", Total: 5397.16, Expense: 4047.81 },
  { name: "June", Total: 8412.05, Expense: 5885.87 },
  { name: "July", Total: 8289.54, Expense: 6545.5 },
  { name: "August", Total: 8214.25, Expense: 6420.87 },
  { name: "September", Total: 12381.29, Expense: 5004.78 },
  { name: "October", Total: 8285.9, Expense: 10210.45 },
  { name: "November", Total: 8235.7, Expense: 4445.71 },
  { name: "December", Total: 8222.3, Expense: 6037.56 },
];

const Chart = () => {
  return (
    <ChartContainer>
      <ChartTitle>Revenue vs Expenses</ChartTitle>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <AreaChart
          width={"100%"}
          height={250}
          data={data}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="Expense" x1="0" y1="0" x2="0" y2="0">
              <stop offset="5%" stopColor="red" stopOpacity={0.8} />
              <stop offset="75%" stopColor="red" stopOpacity={0} />
            </linearGradient>
          </defs>
          <defs>
            <linearGradient id="Total" x1="1" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="green" stopOpacity={0.8} />
              <stop offset="95%" stopColor="green" stopOpacity={0} />
            </linearGradient>
          </defs>

          <XAxis dataKey="name" />
          <YAxis scale="sequential" />
          <CartesianGrid
            strokeDasharray="3 3"
            style={{ stroke: "rgb(228, 225, 225)" }}
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Expense"
            stroke="red"
            fillOpacity={1}
            fill="url(#Expense)"
          />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="green"
            fillOpacity={1}
            fill="url(#Total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default Chart;
