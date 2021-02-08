import React from "react";
import s from "./ProfileInfo.module.css";


function ProfileInfo() {
    return (
        <div>
            <div className={s.content}>
                <img src="https://www.onetwotrip.com/ru/blog/wp-content/uploads/2017/08/rocks.jpg" alt={""}/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;