import { SideBar, NavItem } from './NavBar.styled.js';

const NavBar = () => {
    const navMap = [
        { href: '/', title: 'Home' },
        { href: 'movies', title: 'Movies' },
    ]
    return (
        <SideBar>
            {navMap.map(link => (
                <NavItem key={link.href} to={link.href}>
                    {link.title}
                </NavItem>
            ))}
        </SideBar>
    );
}

export default NavBar;