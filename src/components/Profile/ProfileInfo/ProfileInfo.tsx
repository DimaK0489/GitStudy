import React, {ChangeEvent, useState} from "react";
import s from "./ProfileInfo.module.css";
import {Preloader} from "../../common/preloader/preloder";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/Image/user.png"
import {ProfileDataForm} from "./ProfileDataForm";
import { savePhoto } from "../../../redux/profile-reducer";

export type ProfileInfoPropsType = {
    profile: any
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (files: File) => void
}
export type UserProfileType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    }
    lookingForAJob: boolean,
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}
type ContactPropsType = {
    contactTitle: string
    contactValue: string
}
type ProfileDataPropsType = {
    profile: UserProfileType
    isOwner: boolean
    goToEditMode: () => void
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    const [editMode, setEditMode] = useState<boolean>(false)

    if (!props.profile) {
        return <Preloader/>
    }
    const mainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            savePhoto(e.target.files[0])
        }
    }
    return (
        <div>
            <div className={s.content}>
                <img src="https://s1.1zoom.ru/b4855/832/Volvo_XC90_Blue_Metallic_Crossover_514554_1366x768.jpg"
                     alt={""}/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large || userPhoto} className={s.mainPhoto} alt={""}/>
                {props.isOwner && <input type={"file"} onChange={mainPhotoSelected}/>}
                {editMode
                    ? <ProfileDataForm profile={props.profile}/>
                    : <ProfileData goToEditMode={ () => {setEditMode(true)}} profile={props.profile} isOwner={props.isOwner}/>}
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    );
}

export const Contact = (props: ContactPropsType) => {
    return <div className={s.contact}><b>{props.contactTitle}</b>: {props.contactValue}</div>
}

export const ProfileData = (props: ProfileDataPropsType) => {
    return (
        <div>
            {props.isOwner && <div>
                <button onClick={props.goToEditMode}>EDIT</button>
            </div>}
            <div>
                <b>Full name</b>: {props.profile.fullName}
            </div>
            <div>
                <b>Looking for a job</b>: {props.profile.lookingForAJob ? "Yes" : "No"}
            </div>
            {props.profile.lookingForAJob &&
            <div>
                <b>My professional skills</b>: {props.profile.lookingForAJobDescription}
            </div>
            }
            <div>
                <b>About Me</b>: {props.profile.aboutMe}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts.github}/>
            })}
            </div>
        </div>
    )
}


