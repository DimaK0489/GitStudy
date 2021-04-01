import React, {useState} from "react";
import s from "./ProfileInfo.module.css";
import {Preloader} from "../../common/preloader/preloder";

type ProfileStatusPropsType = {
    status: string
    //state: any
    //title: string
}

/*const ProfileStatus = (props:ProfileStatusPropsType) => {
    return (
        <div>

            {!props.state.editMode && <div>
                <span> {props.status} </span>
            </div>}

            {props.state.editMode && <div>
                <input autoFocus={true} value={props.status}> </input>
            </div>}
        </div>
    );
}*/

//export default ProfileStatus;