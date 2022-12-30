import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import styled from "styled-components";
import Navbar from "../../components/Navbar/Navbar";
import Widget from "../../components/Widget/Widget";
import Chart from "../../components/Chart/Chart";
import Feature from "../../components/Feature/Feature";

const MainPageContainer = styled.div`
  display: flex;
`;

const MainPageWrapper = styled.div`
  flex: 6;
`;

const MainPageWidgets = styled.div`
  display: flex;
  padding: 20px;
  gap: 20px;
`;

const MainPageCharts = styled.div`
  display: flex;
  padding: 5px 20px;
`;

const MainPage = () => {
  return (
    <MainPageContainer>
      <SideBar />
      <MainPageWrapper>
        <Navbar />
        <MainPageWidgets>
          <Widget item="networth" />
          <Widget item="income" />
          <Widget item="expense" />
          <Widget item="assets" />
          <Widget item="liability" />
        </MainPageWidgets>
        <MainPageCharts>
          <Feature />
          <Chart />
        </MainPageCharts>
      </MainPageWrapper>
    </MainPageContainer>
  );
};

export default MainPage;
