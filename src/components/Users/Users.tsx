import React from "react";
import {UsersType} from "../../redux/users-reducer";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";

export type UsersPropsType = {
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    onPageChanged: (p: number) => void
    followingInProgress: Array<number>
    currentPage: any
}

export const Users = (props: UsersPropsType) => {
    return <div>
        <Paginator pageSize={props.pageSize} totalUsersCount={props.totalUsersCount}
                   onPageChanged={props.onPageChanged} currentPage={props.currentPage}/>
        <div>
            {props.users.map(u => <User key={u.id}
                                        unfollow={props.unfollow}
                                        follow={props.follow}
                                        followingInProgress={props.followingInProgress}
                                        user={u}/>)}
        </div>
    </div>
}




