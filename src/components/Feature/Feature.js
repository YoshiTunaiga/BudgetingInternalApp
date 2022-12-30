import React from "react";
import styled from "styled-components";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const FeatureContainer = styled.div`
  flex: 3;
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  padding: 20px;
  margin-right: 30px;
  background-color: ${(props) => props.inputColor || "white"};
`;

const FeatureTitle = styled.h1`
  font-size: 16px;
  font-weight: 500;
`;

const FeatureTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: gray;
`;

const FeatureBottom = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const FeatureLeft = styled.div`
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
`;

const data = [
  { assets: "Assets", name: "Assets", value: 18800.55 },
  { assets: "Liabilities", name: "Liabilities", value: 62634.6 },
];
const COLORS = [
  "#0088FE",
  //  "#00C49F",
  "#FFBB28",
  "#FF8042",
];

const Feature = () => {
  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const formatAmount = (amount, title) =>
    Number(amount.replace("$", "").replace(",", "")).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <FeatureContainer inputColor="rgba(249, 231, 182, 0.48)">
        <FeatureTop>
          <FeatureTitle>Fixed Expenses </FeatureTitle>
        </FeatureTop>
        <FeatureLeft>
          <span
            style={{ fontSize: "28px", fontWeight: "300", color: data.color }}>
            {formatAmount("33420.93")}
          </span>
        </FeatureLeft>
      </FeatureContainer>
      <FeatureContainer inputColor="rgba(249, 182, 215, 0.48)">
        <FeatureTop>
          <FeatureTitle>Flexible Expenses </FeatureTitle>
        </FeatureTop>
        <FeatureLeft>
          <span
            style={{ fontSize: "28px", fontWeight: "300", color: data.color }}>
            {formatAmount("27826.728")}
          </span>
        </FeatureLeft>
      </FeatureContainer>
      <FeatureContainer>
        <FeatureTop>
          <FeatureTitle>Net Worth</FeatureTitle>
        </FeatureTop>
        <FeatureBottom>
          <div
            style={{
              width: "200px",
              height: "200px",
            }}>
            <p style={{ fontWeight: 500, color: "gray", margin: 0 }}>
              Total Worth this year
            </p>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart width={400} height={400}>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value">
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </FeatureBottom>
      </FeatureContainer>
    </div>
  );
};

export default Feature;
