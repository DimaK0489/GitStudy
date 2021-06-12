import React from "react";
import Profile from "./Profile";
import {connect, ConnectedProps} from "react-redux";
import {getStatus, getUserProfile, ProfileType, updateStatus} from "../../redux/profile-reducer";
import {ReduxStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../Hoc/WithAuthRedirect";
import {compose} from "redux";

type PathParamType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamType> & ProfilePropsType

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId ? this.props.authorizedUserId.toString() : ''
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        // @ts-ignore
        this.props.getUserProfile(userId);
        // @ts-ignore
        this.props.getStatus(userId)
    }
    render() {
        return (
            <div>
                <Profile {...this.props}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}/>
            </div>
        )
    }
}

let mapStateToProps = (state: ReduxStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        auth: state.auth.isAuth
    }
};
type MapStateToPropsType = {
    profile: ProfileType | null
    status: string
    authorizedUserId: number | null
    auth: boolean
}
export type ProfilePropsType = ConnectedProps<typeof connector>;

const connector = connect(mapStateToProps, {
    getUserProfile,
    getStatus,
    updateStatus,
})

export default compose<React.ComponentType>(
    connector,
    withRouter,
    withAuthRedirect
)(ProfileContainer)



