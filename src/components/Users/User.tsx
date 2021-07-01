import React from "react";
import style from './users.module.css'
import userPhoto from "../../assets/image/user.png"
import {NavLink} from "react-router-dom";
import {UserProps} from "../../redux/Types";

export const User = (props: UserProps) => {
    return (
        <>
                <span>
                    <div>
                        <NavLink to={"/profile/" + props.user.id}>
                        <img className={style.userPhoto}
                             src={props.user.photos.small !== null ? props.user.photos.small : userPhoto}
                             alt={""}/>
                        </NavLink>
                    </div>
                    <div>
                        {props.user.followed
                            ? <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                      onClick={() => {
                                          props.unfollow(props.user.id)
                                      }}>Unfollow</button>

                            : <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                      onClick={() => {
                                          props.follow(props.user.id)
                                      }}>Follow</button>
                        }
                    </div>
                </span>
            <span>
                    <span>
                        <div>{props.user.name}</div>
                        <div>{props.user.status}</div>
                    </span>
                    <span>
                        <div>{"user.location.country"}</div>
                        <div>{"user.location.city"}</div>
                    </span>
                </span>
        </>)
}


