import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const SideBar = styled.nav`
position: sticky;
display: flex;
gap: 20px;
width: 100%;
padding: 20px;
box-shadow: 7px 6px 38px 2px rgba(0,0,0,0.31);
-webkit-box-shadow: 7px 6px 38px 2px rgba(0,0,0,0.31);
-moz-box-shadow: 7px 6px 38px 2px rgba(0,0,0,0.31);

background-color: #f2f2f2;
`
export const NavItem = styled(NavLink)`
padding: 5px;
border-radius: 4px;

font-size: 18px;
font-weight: 500;
text-decoration: none;

color: #ff2163;

&.active {
		background-color: #ff2163;
		color: white;
	}
	`