import {v1} from "uuid";

export const followAC = (userId: string) => ({type: "FOLLOW", userId} as const)
export const unfollowAC = (userId: string) => ({type: "UNFOLLOW", userId} as const)
export const setUsersAC = (users: Array<UsersType>) => ({type: "SET_USERS", users} as const)

export type UsersType = {
    id: string
    photoUrl: string
    followed: boolean
    fullName: string
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

export let initialsState = {
    users: [
        {id: v1(), photoUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/262fbd6f-4ac7-4d53-ad60-dc4368928462-profile_image-300x300.png",
            followed: false,  fullName: "Dima", status: "Students It-Incubator", location: {city: "Minsk", country: "Belarus"}},
        {id: v1(), photoUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/262fbd6f-4ac7-4d53-ad60-dc4368928462-profile_image-300x300.png",
            followed: true, fullName: "Alena", status: "QA Testing", location: {city: "Minsk", country: "Belarus"}},
        {id: v1(), photoUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/262fbd6f-4ac7-4d53-ad60-dc4368928462-profile_image-300x300.png",
            followed: true, fullName: "Liliya", status: "Boss", location: {city: "California", country: "USA"}},
    ]
}
export type InitialStateType = typeof initialsState

export const usersReducer = (state: InitialStateType = initialsState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId){
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId){
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case "SET_USERS":
            return {...state,users: [...state.users, ...action.users]}
        default:
            return state
    }
}