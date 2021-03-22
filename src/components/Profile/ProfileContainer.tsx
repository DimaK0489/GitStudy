import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {ReduxStateType} from "../../redux/redux-store";

type ProfileContainerPropsType = {
    profile: null
    setUserProfile: (profile: null) => void
}

class ProfileContainer extends  React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0//profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data);
            })
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} />
            </div>
        )
    }
}

let mapStateToProps = (state: ReduxStateType) => ({
    profile: state.profilePage.profile
});

export default connect(mapStateToProps, {setUserProfile}) (ProfileContainer);

