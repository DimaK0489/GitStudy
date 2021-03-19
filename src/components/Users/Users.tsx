import React from "react";
import style from './users.module.css'
import {UsersType} from "../../redux/users-reducer";
import axios from "axios";
import userPhoto from "../../assets/Image/user.png"

type UsersPropsType = {
    unfollow: (userId: string) => void
    follow: (userId: string) => void
    users: Array<UsersType>
    setUsers: (users: []) => void
}


class Users extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <div>
            {this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={style.userPhoto} src={u.photos.small != null ? u.photos.small : userPhoto}
                             alt={""}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
                            }}>Follow</button>}
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

