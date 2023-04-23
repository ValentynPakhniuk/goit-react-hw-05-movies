import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  margin-bottom: 10px;
  align-items: center;
  padding: 14px 24px;
  color: #fff;
  background-color: #fff;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  & ul {
    display: flex;
    gap: 20px;
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 25px;

  &.active {
    color: orangered;
  }
`;