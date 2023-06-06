import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Btn = styled.button`
margin-bottom: 10px;

border:none;
border-radius: 4px;
box-shadow: 0px 0px 2px 2px rgb(0,0,0);

background-color: #0a0a23;
color: #fff;
`

export const MovieWrap = styled.div`
display: flex;
column-gap: 15px;
padding-bottom: 15px;

border-bottom: 1px solid black;
`
export const MovieTitle = styled.p`
font-size: 20px;
font-weight: 700;
`

export const Title = styled.p`
font-size: 18px;
font-weight: 500;
`

export const GenresList = styled.ul`
display: flex;
column-gap: 10px;
padding-left: 0px;
list-style: none;
`

export const NavWrap = styled.div`
padding-left: 15px;
padding-bottom: 20px;

border-bottom: 1px solid black;
`
export const NavItem = styled(NavLink)`
padding: 5px;
border-radius: 4px;

font-size: 12px;
text-decoration: none;

color: #ff2163;

&.active {
		background-color: #ff2163;
		color: white;
	}
	`
