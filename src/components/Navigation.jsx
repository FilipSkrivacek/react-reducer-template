import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.nav`
  background-color: #333;
  color: white;
  padding: 10px 0;
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const NavLogo = styled(Link)`
  font-size: 1.5rem;
  color: white;
  text-decoration: none;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const NavLinkItem = styled.li``;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

function Navigation() {
  return (
    <Navbar>
      <NavbarContainer>
        <NavLogo to="/">React reducer app</NavLogo>
        <NavLinks>
          <NavLinkItem>
            <NavLink to="/add">Reducer controler</NavLink>
          </NavLinkItem>
        </NavLinks>
      </NavbarContainer>
    </Navbar>
  );
}

export default Navigation;
