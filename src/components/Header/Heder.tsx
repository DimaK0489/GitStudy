import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import {logOut} from "../../redux/auth-reducer";

type HeaderPropsType = {
    logOut: any;
    id: number | null
    isAuth: boolean
    login: any
    email: string | null
}

function Header(props: HeaderPropsType) {
    return (
        <header className={s.header}>
            <img src="https://автолого.рф/wp-content/uploads/volvo-logo-2012-2048x2048.png" alt={""}/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logOut}>LogOut</button></div>
                    : <NavLink to={"/login"}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;