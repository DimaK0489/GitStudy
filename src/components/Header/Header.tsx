import React from "react";
import {NavLink} from "react-router-dom";
import style from "./Header.module.css";

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    logOut: () => void;
}

export const Header = (props: HeaderPropsType) => {
    return (
        <header className={style.header}>
            <img src="https://автолого.рф/wp-content/uploads/volvo-logo-2012-2048x2048.png" alt={""}/>
            <div className={style.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} <button onClick={props.logOut} className={style.logoutButton}>LogOut</button></div>
                    : <NavLink to={"/login"}>Login</NavLink>}
            </div>
        </header>
    );
}

