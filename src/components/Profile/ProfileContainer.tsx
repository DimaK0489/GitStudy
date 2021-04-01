import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {ReduxStateType} from "../../redux/redux-store";
import {withRouter} from "react-router-dom";

type ProfileContainerPropsType = {
    profile: null
    setUserProfile: (profile: null) => void
}

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

let mapStateToProps = (state: ReduxStateType) => ({
    profile: state.profilePage.profile
});

let WithUrlDateContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, {getUserProfile})(WithUrlDateContainerComponent);

