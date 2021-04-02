import React from "react";
import style from './users.module.css'
import {UsersType} from "../../redux/users-reducer";
import userPhoto from "../../assets/Image/user.png"
import {NavLink} from "react-router-dom";

export type UsersPropsType = {
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    onPageChanged: (p: number) => void
    followingInProgress: Array<number>
    //currentPage: number | string
    //setCurrentPage: (currentPage: number) => void
    //setTotalUsersCount: (totalCount: number) => void
    //toggleFollowingProgress: (isFetching: boolean, id: number) => void
    //setUsers: (users: []) => void

}

let Users = (props: UsersPropsType) => {
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
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => { props.unfollow(u.id) }}>Unfollow</button>

                            : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => {  props.follow(u.id)
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
export default Users;

