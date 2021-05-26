import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

export type UsersType = {
    id: number
    photos: any
    followed: boolean
    name: string
    status: string
    location: LocationType
}
export type LocationType = {
    city: string
    country: string
}
export type ActionsType =
    ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingProgress>

export let initialsState = {
    users: [
        {
            id: 1,
            photos: "https://static-cdn.jtvnw.net/jtv_user_pictures/262fbd6f-4ac7-4d53-ad60-dc4368928462-profile_image-300x300.png",
            followed: false,
            name: "Dima",
            status: "Students It-Incubator",
            location: {city: "Minsk", country: "Belarus"}
        },
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>
}

export type usersStateType = typeof initialsState

export const usersReducer = (state: usersStateType = initialsState, action: ActionsType): usersStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case "SET_USERS":
            return {...state, users: action.users}
        case "SET_CURRENT_PAGE":
            return {...state, currentPage: action.currentPage}
        case "SET_TOTAL_USERS_COUNT":
            return {...state, totalUsersCount: action.count}
        case "TOGGLE IS FETCHING":
            return {...state, isFetching: action.isFetching}
        case "TOGGLE_IS_FOLLOWING_PROGRESS":
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

//actions
export const unfollowSuccess = (userId: number) => ({type: "UNFOLLOW", userId} as const)
export const followSuccess = (userId: number) => ({type: "FOLLOW", userId} as const)
export const setUsers = (users: Array<UsersType>) => ({type: "SET_USERS", users} as const)
export const setCurrentPage = (currentPage: number) => ({type: "SET_CURRENT_PAGE", currentPage} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: "SET_TOTAL_USERS_COUNT",
    count: totalUsersCount
} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: "TOGGLE IS FETCHING", isFetching} as const)
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({
    type: "TOGGLE_IS_FOLLOWING_PROGRESS",
    isFetching,
    userId
} as const)

//thunk
export const requestUsersTC = (page: number, pageSize: number) => async (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));
    let data = await usersAPI.getUsers(page, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));

}
export const followUnfollowFlow = async (dispatch: Dispatch, userId: number, apiMethod: Function, actionCreator: Function) => {
    dispatch(toggleFollowingProgress(true, userId));
    let response = await apiMethod(userId)
    if(response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false,userId))
}
export const follow = (userId: number) => async (dispatch: Dispatch) => {
   await followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), followSuccess)

}
export const unfollow = (userId: number) => async (dispatch: Dispatch) => {
    await followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)


}