import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";


function DialogItem(props:any){
    return(
        <div className={s.dialog + " " + s.active}>
            <NavLink to={"/dialogs/1" + props.id}>{props.name}</NavLink>
        </div>
    );
}

function Message(props:any){
    return(
        <div className={s.dialog}>{props.message}</div>
    );
}

function Dialogs() {
    let dialogsDate = [
        {id: 1, name: "Alena"},
        {id: 2, name: "Denis"},
        {id: 3, name: "Andrey"},
        {id: 4, name: "Juliya"},
        {id: 5, name: "Dimas"},
        {id: 6, name: "Maks"}
    ];
    let messagesData = [
        {id: 1, message: "Hello my friends"},
        {id: 2, message: "How are you"},
        {id: 3, message: "Sorry i am latte"},
        {id: 4, message: "React very easy"},
        {id: 5, message: "Good buy"},
        {id: 6, message: "Buy"}
    ];
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsDate[0].name} id={dialogsDate[0].id}/>
                <DialogItem name={dialogsDate[1].name} id={dialogsDate[1].id}/>
                <DialogItem name={dialogsDate[2].name} id={dialogsDate[2].id}/>
                <DialogItem name={dialogsDate[3].name} id={dialogsDate[3].id}/>
                <DialogItem name={dialogsDate[4].name} id={dialogsDate[4].id}/>
                <DialogItem name={dialogsDate[5].name} id={dialogsDate[5].id}/>

            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
                <Message message={messagesData[3].message}/>
                <Message message={messagesData[4].message}/>
                <Message message={messagesData[5].message}/>

            </div>
        </div>

    );
}

export default Dialogs;