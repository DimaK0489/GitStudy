import React from "react";
import {addMessageAC, onMessageChangeAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {compose, Dispatch} from "redux";
import {connect} from "react-redux";
import {ReduxStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../Hoc/WithAuthRedirect";

/*function DialogsContainer(props: DialogsContainerPropsType) {

    const addMessage = () => {
        props.store.dispatch(addMessageAC())
    }
    const onMessageChange = (text:string) => {
        props.store.dispatch(onMessageChangeAC(text))
    }
    return (
        <Dialogs dialogs={props.store.getState().dialogsPage.dialogs}
                 messages={props.store. getState().dialogsPage.messages}
                 newMessagesText={props.store.getState().dialogsPage.newMessagesText}
                 addMessage={addMessage}
                 onMessageChange={onMessageChange}/>
        )
}*/

let mapStateToProps = (state: ReduxStateType) => {
    return{
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessagesText: state.dialogsPage.newMessagesText,
        //isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return{
        addMessage: () => {dispatch(addMessageAC())},
        onMessageChange: (text: string) => {dispatch(onMessageChangeAC(text))}
    }
}

/*const AuthRedirectComponent = withAuthRedirect(Dialogs);
    /!*(props: any) => {
    if(!props.isAuth) return <Redirect to={"/login"}/>
    return <Dialogs {...props} />
}*!/
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (AuthRedirectComponent);*/

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);