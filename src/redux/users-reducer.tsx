import {v1} from "uuid";

export const followAC = (userId: string) => ({type: "FOLLOW", userId} as const)
export const unfollowAC = (userId: string) => ({type: "UNFOLLOW", userId} as const)
export const setUsersAC = (users: Array<UsersType>) => ({type: "SET_USERS", users} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: "SET_CURRENT_PAGE", currentPage} as const)
export const setUsersTotalCountAC = (totalUsersCount: number) => ({
    type: "SET_TOTAL_USERS_COUNT",
    count: totalUsersCount
} as const)

export type UsersType = {
    id: string
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
    ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setUsersTotalCountAC>

export let initialsState = {
    users: [
        {
            id: v1(),
            photos: "https://static-cdn.jtvnw.net/jtv_user_pictures/262fbd6f-4ac7-4d53-ad60-dc4368928462-profile_image-300x300.png",
            followed: false,
            name: "Dima",
            status: "Students It-Incubator",
            location: {city: "Minsk", country: "Belarus"}
        },
    ],
    pageSize: 5,
    totalUsersCount: 20,
    currentPage: 2,
}
export type InitialStateType = typeof initialsState

export const usersReducer = (state: InitialStateType = initialsState, action: ActionsType): InitialStateType => {
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
        default:
            return state
    }
}