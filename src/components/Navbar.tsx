import React from 'react';
import {
    Link
} from "react-router-dom";

import './navbar.css'
import Button from "./Button";

interface Props {
    logout: () => void
    isAuth: boolean
    openModal: () => void
}

const Navbar: React.FC<Props> = ({logout, isAuth, openModal}) => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="trade">Trade</Link>
            <div className="topnav-right">
                {isAuth ? <>
                    <Button title="Logout" onClick={logout}/>
                </> : <Button title="Login" onClick={openModal}/>}
            </div>
        </nav>
    )
}

export default Navbar;