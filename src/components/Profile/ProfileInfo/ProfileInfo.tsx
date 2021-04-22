import React from "react";
import s from "./ProfileInfo.module.css";
import {Preloader} from "../../common/preloader/preloder";
import ProfileStatus from "./ProfileStatus";
import {ProfileType} from "../../../redux/profile-reducer";

type ProfileInfoPropsType = {
    profile: any
    status: string
    updateStatus: (status: string) => void
}

function ProfileInfo(props: ProfileInfoPropsType) {
    if (!props.profile){
        return <Preloader />
    }
    return (
        <div>
            <div className={s.content}>
                <img src="https://s1.1zoom.ru/b4855/832/Volvo_XC90_Blue_Metallic_Crossover_514554_1366x768.jpg" alt={""}/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt={""}/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    );
}

export default ProfileInfo;