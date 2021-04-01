import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

type HeaderPropsType = {
    id: number | null
    isAuth: boolean
    login: string
    email: string | null
}

function Header(props: HeaderPropsType) {
    return (
        <header className={s.header}>
            <img src="https://автолого.рф/wp-content/uploads/volvo-logo-2012-2048x2048.png" alt={""}/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;