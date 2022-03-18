import React, { FC } from 'react';
import Navbar from '../widgets/Navbar';
import SideBar from '../widgets/SideBar';
import { Outlet, Link } from "react-router-dom";

interface Props {
    // any props that come into the component
}

const Auth: FC<Props> = ({ children }) => {
    return (
        <>
            <div id="wrapper">
              
                <div className="d-flex flex-column" id="content-wrapper">
                    <div id="content">
                    <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Auth;

