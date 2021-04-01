import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {ReduxStateType} from "../../redux/redux-store";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../Hoc/WithAuthRedirect";
import {compose} from "redux";

type ProfileContainerPropsType = {
    profile: null
    getUserProfile: (userId: number) => void
    isAuth: boolean
    match: any
}
let mapStateToProps = (state: ReduxStateType) => {
    return {
        profile: state.profilePage.profile}
    //isAuth: state.auth.isAuth
};

class ProfileContainer extends React.Component<any> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)



