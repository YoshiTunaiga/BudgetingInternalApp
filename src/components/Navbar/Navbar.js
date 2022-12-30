import React from "react";
import { Icon } from "semantic-ui-react";
import styled from "styled-components";

const NavbarContainer = styled.div`
  height: 60px;
  border-bottom: 0.5px solid rgb(230, 227, 227);
  display: flex;
  align-items: center;
  font-size: 14px;
  color: gray;
`;

const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px;
  justify-content: space-between;
`;

const NavbarItems = styled.div`
  display: flex;
  align-items: center;
`;

const NavbarSearch = styled.div`
  display: flex;
  align-items: center;
  border: 00.5px solid lightgrey;
  padding: 3px;
`;

const NavbarItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  position: relative;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarWrapper>
        <NavbarSearch>
          <input
            style={{
              border: "none",
              outline: "none",
              background: "transparent",
            }}
          />
          <Icon name="search" />
        </NavbarSearch>
        <NavbarItems>
          <NavbarItem></NavbarItem>
          <NavbarItem>
            <Icon name="alarm" />
          </NavbarItem>
          <NavbarItem>
            <img
              style={{ width: "30px", height: "30px", borderRadius: "50%" }}
              src="https://www.iriset.in/tms/uploads/profile/profile.png"
              alt="user"
              className="avatar"
            />
          </NavbarItem>
        </NavbarItems>
      </NavbarWrapper>
    </NavbarContainer>
  );
};

export default Navbar;
