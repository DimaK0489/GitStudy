import React from "react";
import {addMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {compose, Dispatch} from "redux";
import {connect} from "react-redux";
import {ReduxStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../Hoc/WithAuthRedirect";

let mapStateToProps = (state: ReduxStateType) => {
    return{
        dialogsPage: state.dialogsPage
        // dialogs: state.dialogsPage.dialogs,
        // messages: state.dialogsPage.messages,
        // newMessagesText: state.dialogsPage.newMessagesText,
        //isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return{
        addMessage: (newMessagesText: string) => {dispatch(addMessageAC(newMessagesText))},
        // onMessageChange: (text: string) => {dispatch(onMessageChangeAC(text))}
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);