import React from 'react'
import {compose} from 'redux'
import {connect, ConnectedProps} from 'react-redux'
import {RouteComponentProps, withRouter} from 'react-router-dom'
import {Profile} from './Profile'
import {AppStateType} from '../../redux/redux-store'
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../Hoc/WithAuthRedirect";

class ProfileContainer extends React.PureComponent<PropsType, AppStateType> {

    refreshProfile() {
        const {authorizedUserId, history, match, getUserProfile, getStatus} = this.props
        let userId = match.params.userId
        if (!userId) {
            userId = authorizedUserId || 15385
            if (!userId) {
                history.push('/login')
            }
        }
        getUserProfile(userId)
        getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<AppStateType>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId)
            this.refreshProfile()
    }

    render() {
        const {profile, status, updateStatus, savePhoto, saveProfile} = this.props

        return (
            <div>
                <Profile {...this.props}
                         isOwner={!this.props.match.params.userId}
                         profile={profile}
                         status={status}
                         updateStatus={updateStatus}
                         savePhoto={savePhoto}
                         saveProfile={saveProfile}
                />
            </div>
        )
    }
}

export const mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth
})

const connector = connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile})
export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto,saveProfile}),
    withRouter,
    withAuthRedirect,
    connector
)(ProfileContainer)

// types
type PropsType = RouteComponentProps<PathParamsType> & TProps
type PathParamsType = { userId: any }
type TProps = ConnectedProps<typeof connector>