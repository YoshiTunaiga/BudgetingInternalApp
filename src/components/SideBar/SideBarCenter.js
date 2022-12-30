import React from "react";
import { Icon } from "semantic-ui-react";
import styled from "styled-components";

const SideBarCenterContainer = styled.div`
  padding-left: 10px;
`;

const SideBarListWrapper = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const SideBarList = styled.li`
  display: flex;
  align-items: center;
  padding: 5px;
  cursor: pointer;
`;

const SideBarListTitle = styled.p`
  font-size: 10px;
  font-weight: bold;
  color: gray;
  margin-top: 15px;
  margin-bottom: 5px;
  text-align: left;
`;

const ListName = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: #888;
  margin-left: 10px;
`;

const SideBarCenter = () => {
  return (
    <SideBarCenterContainer>
      <SideBarListWrapper>
        <SideBarListTitle>MAIN MENU</SideBarListTitle>
        <SideBarList>
          <Icon name="th" style={{ fontSize: "18px", color: "#1f5ce0" }} />
          <ListName>Dashboard</ListName>
        </SideBarList>
        <SideBarListTitle>MONEY LIST</SideBarListTitle>
        <SideBarList>
          <Icon
            name="money bill alternate"
            style={{ fontSize: "18px", color: "#1f5ce0" }}
          />
          <ListName>Income</ListName>
        </SideBarList>
        <SideBarList>
          <Icon name="pin" style={{ fontSize: "18px", color: "#1f5ce0" }} />
          <ListName>Expenses</ListName>
        </SideBarList>
      </SideBarListWrapper>
    </SideBarCenterContainer>
  );
};

export default SideBarCenter;
