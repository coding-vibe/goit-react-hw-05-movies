import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../../NavBar/NavBar';
import { WrapperOutlet } from './Layout.styled.js';

const Layout = () => {

    return (
        <div>
            <NavBar />
            <WrapperOutlet>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </WrapperOutlet>
        </div>
    );
}

export default Layout;