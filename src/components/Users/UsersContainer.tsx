import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {ReduxStateType} from "../../redux/redux-store";
import {follow, requestUsersTC, unfollow, UsersType} from "../../redux/users-reducer";
import {Preloader} from "../common/preloader/preloder";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUserCount,
    getUsers
} from "../../redux/users selectors";

type MSTPType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number | string
    isFetching: boolean
    followingInProgress: Array<number>
}

type MDTPType = {
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    requestUsers: (currentPage: number | string, pageSize: number) => void
}

type UsersContainerType = MSTPType & MDTPType

class UsersContainer extends React.Component<UsersContainerType> {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.requestUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}

            <Users users={this.props.users}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   onPageChanged={this.onPageChanged}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

const mapStateToProps = (state: ReduxStateType): MSTPType =>  {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

/*const mapStateToProps = (state: ReduxStateType): MSTPType =>  {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}*/

export default compose<React.ComponentType>(
    connect(mapStateToProps,  {follow, unfollow, requestUsers: requestUsersTC}),
)(UsersContainer)




