import React, {ChangeEvent} from "react";
import s from "./ProfileInfo.module.css";
import {Preloader} from "../../common/preloader/preloder";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/Image/user.png"

type ProfileInfoPropsType = {
    profile: any
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (files: any) => void
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile){
        return <Preloader />
    }
    const mainPhotoSelected = (e:ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files) {
            props.savePhoto(e.currentTarget.files[0])
        }
    }
    return (
        <div>
            <div className={s.content}>
                <img src="https://s1.1zoom.ru/b4855/832/Volvo_XC90_Blue_Metallic_Crossover_514554_1366x768.jpg" alt={""}/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large || userPhoto} className={s.mainPhoto} alt={""}/>
                {props.isOwner && <input type={"file"} onChange={mainPhotoSelected}/>}
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    );
}

