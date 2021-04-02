import React from "react";
import {dialogsReducer, DialogsType, onMessageChangeAC} from "./dialogs-reducer";

let startState: DialogsType
beforeEach( () => {
    startState = {
        newMessagesText: "",
        dialogs: [
            {id: "1", name: "Alena"},
            {id: "2", name: "Denis"},
            {id: "3", name: "Andrey"},
            {id: "4", name: "Juliya"},
            {id: "5", name: "Dimas"},
            {id: "6", name: "Maks"}
        ],
        messages: [
            {id: "1", message: "Hello my friends"},
            {id: "2", message: "How are you"},
            {id: "3", message: "Sorry i am latte"},
            {id: "4", message: "React very easy"},
            {id: "5", message: "Good night"},
        ]
    }
})

test("add text to message", () => {
    const action = onMessageChangeAC("Hello");
    const endState = dialogsReducer(startState, action);

    expect(endState["messages"][5].message).toBe("Hello")
});


