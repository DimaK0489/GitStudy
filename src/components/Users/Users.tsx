import React from "react";
import {Paginator} from "../common/paginator/Paginator";
import {User} from "./User";
import {UsersPropsType} from "../../redux/Types";

export const Users = (props: UsersPropsType) => {
    return <>
        <Paginator pageSize={props.pageSize} totalUsersCount={props.totalUsersCount}
                   onPageChanged={props.onPageChanged} currentPage={props.currentPage}/>
        <div>
            {props.users.map(u => <User key={u.id}
                                        unfollow={props.unfollow}
                                        follow={props.follow}
                                        followingInProgress={props.followingInProgress}
                                        user={u}/>)}
        </div>
    </>
}




