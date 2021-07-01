import React, {ChangeEvent, useState} from "react";
import style from "./ProfileInfo.module.css";
import {Preloader} from "../../common/preloader/Preloder";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/image/user.png"
import {savePhoto, saveProfile, updateStatus} from "../../../redux/profile-reducer";
import {ContactPropsType, ProfileDataPropsType, ProfilePropsType, ProfileType} from "../../../redux/Types";
import ProfileDataForm from "./ProfileDataForm";


export const ProfileInfo = (props: ProfilePropsType) => {
    const [editMode, setEditMode] = useState<boolean>(false)

    if (!props.profile) {
        return <Preloader/>
    }
    const mainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files && e.currentTarget.files.length) {
            savePhoto(e.currentTarget.files[0])
        }
    }
    const onSubmit = (formData: ProfileType) => {
        saveProfile(formData)
        setEditMode(false)
    }
    const onEditMode = () => {
        setEditMode(true)
    }
    return (
        <div className={style.descriptionBlock}>
            <ProfileStatusWithHooks status={props.status} updateStatus={updateStatus}/>

            <img src={props.profile.photos.large || userPhoto} className={style.userPhoto} alt={'profile'}/>
            <div>{props.isOwner && <input type="file" onChange={mainPhotoSelected}/>}</div>

            {editMode
                ? <ProfileDataForm onSubmit={onSubmit} initialValues={props.profile} profile={props.profile}/>
                : <ProfileData profile={props.profile} isOwner={props.isOwner} onEditMode={onEditMode}/>
            }

        </div>
    );
}

export const Contact = (props: ContactPropsType) => {
    return <div className={style.contact}><b>{props.contactTitle}</b>: {props.contactValue}</div>
}

export const ProfileData = (props: ProfileDataPropsType) => {
    return (
        <>
            {props.isOwner && <div>
                <button onClick={props.onEditMode}>EDIT</button>
            </div>}
            <div><b>Full name: </b> {props.profile.fullName}</div>
            <div><b>About Me: </b> {props.profile.aboutMe}</div>
            <div><b>Looking for a job: </b> {props.profile.lookingForAJob ? "Yes" : "No"}</div>

            {props.profile.lookingForAJob &&
            <div>
                <b>My professional skills: </b>
                <span>{props.profile.lookingForAJobDescription}</span>
            </div>}

            <div>
                <b>Contacts: </b> {Object.keys(props.profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts.github}/>
            })}
            </div>
        </>
    )
}


