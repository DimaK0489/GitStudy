import {v1} from "uuid";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"

export const followAC = (userID: string) => ({type: FOLLOW, userID} as const)
export const unfollowAC = (userID: string) => ({type: UNFOLLOW, userID} as const)
export const setUsersAC = (users: any) => ({type: SET_USERS, users} as const)

export type ActionsType =
    ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>

export let initialsState = {
    users: []
}
export type InitialStateType = typeof initialsState

export const usersReducer = (state: InitialStateType = initialsState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userID){
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userID){
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {...state,users: [...state.users, ...action.users]}
        default:
            return state
    }
}