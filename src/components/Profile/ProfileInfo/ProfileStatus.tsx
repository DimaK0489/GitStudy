import React, {ChangeEvent} from "react";
import {ProfileStatusType} from "../../../redux/Types";

export class ProfileStatus extends React.Component<ProfileStatusType> {
    state = {
        editMode: false,
        status: this.props.status
    }
    activatedMode = () => {
        this.setState({
            editMode: true
        });
    }
    deactivatedMode = () => {
        this.setState({editMode: false})
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: Readonly<{}>) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }
    }

    render() {
        return (
            <>
                <div>
                    {this.state.editMode && <input onBlur={this.deactivatedMode}
                                                   value={this.props.status}/>}
                    {this.state.editMode && <input
                        autoFocus={true}
                        onBlur={this.deactivatedMode}
                        onChange={this.onStatusChange}
                        value={this.state.status}/>}
                </div>
                <div>
                    {!this.state.editMode && <span
                        onDoubleClick={this.activatedMode.bind(this)}>{this.props.status}
                </span>}
                    {!this.state.editMode && <span
                        onDoubleClick={this.activatedMode}>{this.props.status || '_______'}
                </span>}

                </div>
            </>
        );
    }
}

