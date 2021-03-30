import React from "react";
import style from './users.module.css'
import {UsersType} from "../../redux/users-reducer";
import userPhoto from "../../assets/Image/user.png"
import {NavLink} from "react-router-dom";
import axios from "axios";

export type UsersPropsType = {
    unfollow: (userId: string) => void
    follow: (userId: string) => void
    users: Array<UsersType>
    setUsers: (users: []) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number | string
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    onPageChanged: (p: number) => void
}

let Users = (props: UsersPropsType) => {
    {
        let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return <div>
            <div className={style.cursor}>
                {pages.map(p => {
                    // @ts-ignore
                    return <span className={props.currentPage === p && style.selectedPage}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })}
            </div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={"/profile/" + u.id}>
                        <img className={style.userPhoto} src={u.photos.small != null ? u.photos.small : userPhoto}
                             alt={""}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0//follow/${u.id}`, {withCredentials: true,headers: {
                                        "API-KEY": "bf0875ba-8463-481a-87a8-643832194416"
                                    }})
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                    })

                            }}>Unfollow</button>
                            : <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0//follow/${u.id}`, {}, {withCredentials: true, headers: {
                                        "API-KEY": "bf0875ba-8463-481a-87a8-643832194416"
                                    }})
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                    })

                            }}>Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)}
        </div>
    }
}
export default Users;

