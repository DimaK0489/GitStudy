import {v1} from "uuid";

export type UsersType = {
    id: any
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
    ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>

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
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
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
        case "TOGGLE IS FETCHING":
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}

export const follow = (userId: string) => ({type: "FOLLOW", userId} as const)
export const unfollow = (userId: string) => ({type: "UNFOLLOW", userId} as const)
export const setUsers = (users: Array<UsersType>) => ({type: "SET_USERS", users} as const)
export const setCurrentPage = (currentPage: number) => ({type: "SET_CURRENT_PAGE", currentPage} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: "SET_TOTAL_USERS_COUNT",
    count: totalUsersCount} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: "TOGGLE IS FETCHING", isFetching} as const)