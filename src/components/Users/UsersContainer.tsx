import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {ReduxStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";


function mapStateToProps(state: ReduxStateType) {
    return {
        users: state.usersPage.users
    }
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        follow: (userID: string) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: string) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users: any) => {
            dispatch(setUsersAC(users))
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (Users)