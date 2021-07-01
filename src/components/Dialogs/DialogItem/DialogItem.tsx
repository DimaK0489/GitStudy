import React from "react";
import style from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";

type DialogsItemPropsType = {
    id: string,
    name: string
}
export const DialogItem = (props: DialogsItemPropsType) => {
    return (
        <div className={style.dialog + " " + style.active}>
            <NavLink to={"/dialogs/1" + props.id}>{props.name}</NavLink>
        </div>
    );
}

