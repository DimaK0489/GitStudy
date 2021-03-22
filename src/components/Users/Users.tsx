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
    pageSize: number
    totalUsersCount: number
    currentPage: number | string
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

class Users extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }
    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++){
            pages.push(i);
        }

        return <div>
            <div>
                { pages.map( p => {
                    // @ts-ignore
                    return <span className={ this.props.currentPage === p && style.selectedPage}
                                 onClick={ (e) => { this.onPageChanged(p) }}>{p}</span>})}
            </div>
            { this.props.users.map(u => <div key={u.id}>
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

