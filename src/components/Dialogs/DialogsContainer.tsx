import React from "react";
import {addMessageAC, DialogsInitialStateType} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {compose, Dispatch} from "redux";
import {connect} from "react-redux";
import {ReduxStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../Hoc/WithAuthRedirect";

type MapStateToPropsType = {
    dialogsPage: DialogsInitialStateType;
}
type MapDispatchToPropsType = {
    addMessage: (newMessagesText: string) => void
}
export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: ReduxStateType): MapStateToPropsType => {
    return{
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return{
        addMessage: (newMessagesText: string) => {dispatch(addMessageAC(newMessagesText))}
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);