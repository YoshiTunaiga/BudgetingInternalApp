import React from "react";
import styled from "styled-components";
import SideBarCenter from "./SideBarCenter";

const SideBarContainer = styled.div`
  flex: 1;
  border: 0.5px solid rgb(230, 227, 227);
  min-height: 100vh;
  background-color: white;
`;

const SideBarTop = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SideBarBottom = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
`;

const SideBar = () => {
  return (
    <SideBarContainer>
      <SideBarTop>
        <span
          style={{ fontSize: "20px", fontWeight: "bold", color: "#1f5ce0" }}>
          Admin Panel
        </span>
      </SideBarTop>
      <hr />
      <SideBarCenter />
      <SideBarBottom>
        <div className="colorOptions"></div>
        <div className="colorOptions"></div>
      </SideBarBottom>
    </SideBarContainer>
  );
};

export default SideBar;
