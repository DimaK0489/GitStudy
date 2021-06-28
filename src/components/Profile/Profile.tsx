import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfileType} from "../../redux/profile-reducer";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfilePostType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (files: any) => void
}

const Profile = (props: ProfilePostType) => {
    return (
        <div>
            <ProfileInfo savePhoto={props.savePhoto}
                         profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}
                         isOwner={props.isOwner}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;