import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {ReduxStateType} from "../../redux/redux-store";
import {follow, getUsers, unfollow, UsersType} from "../../redux/users-reducer";
import {Preloader} from "../common/preloader/preloder";
import {withAuthRedirect} from "../../Hoc/WithAuthRedirect";
import {compose} from "redux";

type UsersPropsType = {
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number | string
    isFetching: boolean
    followingInProgress: Array<number>
    getUsers: (currentPage: number | string, pageSize: number) => void
}

export class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

function mapStateToProps(state: ReduxStateType) {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, {follow, unfollow, getUsers})(UsersContainer));
