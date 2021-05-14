import React from "react";
import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";

type DialogsItemPropsType = {
    id: string,
    name: string
}
function DialogItem(props: DialogsItemPropsType) {
    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={"/dialogs/1" + props.id}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;