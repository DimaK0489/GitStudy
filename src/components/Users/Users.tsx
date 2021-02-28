import React from "react";
import style from './users.module.css'
import {v1} from "uuid";


const Users = () => {
    if(props.users.length === 0){
    props.setUsers([
        {id: v1(), photoUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/262fbd6f-4ac7-4d53-ad60-dc4368928462-profile_image-300x300.png",
            followed: false,  fullName: "Dima", status: "Students It-Incubator", location: {city: "Minsk", country: "Belarus"}},
        {id: v1(), photoUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/262fbd6f-4ac7-4d53-ad60-dc4368928462-profile_image-300x300.png",
            followed: true, fullName: "Alena", status: "QA Testing", location: {city: "Minsk", country: "Belarus"}},
        {id: v1(), photoUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/262fbd6f-4ac7-4d53-ad60-dc4368928462-profile_image-300x300.png",
            followed: true, fullName: "Liliya", status: "Boss", location: {city: "California", country: "USA"}},
    ])}
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