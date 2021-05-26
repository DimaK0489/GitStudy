import {addPostAC, deletePostAC, profileReducer, ProfileType} from "./profile-reducer";

let initialsState: ProfileType

beforeEach(() => {
    initialsState = {
        postsData: [
            {id: "1", message: "How are you", likesCount: 8},
            {id: "2", message: "It is my first post", likesCount: 6},
            {id: "3", message: "Hello", likesCount: 12},
        ],
        profile: null,
        userId: 0,
        status: " "
    }
})

test("test addPostAC", () => {
    let action = addPostAC("It-Incubator")
    let newState = profileReducer(initialsState, action)

    expect(newState.postsData.length).toBe(4);
    expect(newState.postsData[3].message).toBe('It-Incubator')
})
test("after deleting length of messages should be decrement", () => {
    let action = deletePostAC("1")
    let newState = profileReducer(initialsState, action)

    expect(newState.postsData.length).toBe(2);
    expect(newState.postsData[0].message).toBe('It is my first post')
})
test("after deleting length shouldn`t be decrement if id is incorrect", () => {
    let action = deletePostAC("1000")
    let newState = profileReducer(initialsState, action)

    expect(newState.postsData.length).toBe(3);
})