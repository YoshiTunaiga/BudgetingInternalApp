import React from "react";
import { Icon } from "semantic-ui-react";
import styled from "styled-components";
import { HiCurrencyDollar } from "react-icons/hi";

const WidgetContainer = styled.div`
  display: flex;
  flex: 1px;
  justify-content: space-between;
  padding: 10px;
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  border-radius: 10px;
  height: 100px;
`;

const WidgetTitle = styled.span`
  font-weight: bold;
  font-size: 14px;
  color: rgb(160, 160, 160);
`;

const WidgetLink = styled.span`
  width: max-content;
  font-size: 12px;
  border-bottom: 1px solid grey;
`;

const WidgetLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const WidgetRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Widget = ({ item }) => {
  let data;

  switch (item) {
    case "networth":
      data = {
        title: "Net Worth",
        isMoney: false,
        link: "See your Net Worth",
        amount: "43834.05",
        color: "red",
        // icon: <Icon name="money bill alternate" color="green" />,
      };
      break;
    case "income":
      data = {
        title: "Income",
        isMoney: false,
        link: "See All Income",
        amount: "86362.90",
        icon: <Icon name="money bill alternate" color="green" />,
      };
      break;
    case "expense":
      data = {
        title: "Expenses",
        isMoney: false,
        link: "See All Expenses",
        amount: "63557.77",
        color: "red",
        icon: <HiCurrencyDollar style={{ color: "red" }} />,
      };
      break;
    case "assets":
      data = {
        title: "Assets",
        isMoney: true,
        link: "View Assets",
        amount: "18800.55",
        // icon: (
        //     <MonetizationOnOutlinedIcon className='icon'  style={{
        //         color: 'green',
        //         backgroundColor: 'rgba(0, 128, 0, 0.2)'}} />
        // ),
      };
      break;
    case "liability":
      data = {
        title: "Liabilities",
        isMoney: true,
        link: "See Liabilities",
        amount: "62634.6",
        color: "red",
        // icon: (
        //     <AccountBalanceWalletOutlinedIcon className='icon' style={{
        //         color: 'purple',
        //         backgroundColor: 'rgba(128, 0, 128, 0.2)'}} />
        // ),
      };
      break;
    default:
      break;
  }

  const formatAmount = (amount, title) => {
    return title === "Net Worth" ? (
      <>
        <Icon circular inverted color="green" size="small" name="chart bar" /> (
        {Number(amount.replace("$", "").replace(",", "")).toLocaleString(
          "en-US",
          {
            style: "currency",
            currency: "USD",
          }
        )}
        )
      </>
    ) : (
      Number(amount.replace("$", "").replace(",", "")).toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      })
    );
  };

  return (
    <WidgetContainer>
      <WidgetLeft>
        <WidgetTitle>{data.title}</WidgetTitle>
        <span
          style={{ fontSize: "20px", fontWeight: "300", color: data.color }}>
          {formatAmount(data.amount, data.title)}
        </span>
        <WidgetLink>{data.link}</WidgetLink>
      </WidgetLeft>
      <WidgetRight>{data.icon}</WidgetRight>
    </WidgetContainer>
  );
};

export default Widget;
