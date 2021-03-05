import React from "react";
import style from './users.module.css'
import {UsersType} from "../../redux/users-reducer";

type UsersPropsType = {
    unfollow: (userId: string) => void
    follow: (userId: string) => void
    users: Array<UsersType>
    setUsers: (users: []) => void
}

const Users = (props: UsersPropsType) => {

    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={style.userPhoto} src={u.photoUrl} alt={""}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id)}}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}
export default Users