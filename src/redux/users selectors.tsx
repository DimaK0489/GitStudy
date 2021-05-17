import {ReduxStateType} from "./redux-store";
import {createSelector} from "reselect";

export const getUsersSelector = (state: ReduxStateType) => {
    return state.usersPage.users
}
export const getUsers = createSelector(getUsersSelector,(users) => {
    return users.filter(u => true)
})
export const getPageSize = (state: ReduxStateType) => {
    return state.usersPage.pageSize
}
export const getTotalUserCount = (state: ReduxStateType) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state: ReduxStateType) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state: ReduxStateType) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state: ReduxStateType) => {
    return state.usersPage.followingInProgress
}