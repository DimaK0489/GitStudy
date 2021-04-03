import React from "react";



class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        title: "Hey"
    }
    activatedEditMode () {
        this.state.editMode = true;
        this.setState( {
            editMode: true
        });
    }
    deactivateMode() {
        this.setState( {
            editMode: false
        })
    }

    render(){
    return (
        <div>
            {!this.state.editMode && <div>
                <span onDoubleClick={ () => {this.activatedEditMode.bind(this)}}> {} </span>
            </div>}

            {this.state.editMode && <div>
                <input autoFocus={true} onBlur={this.deactivateMode.bind(this)} value={"Hello"}> </input>
            </div>}
        </div>
    );}
}

export default ProfileStatus;