import React, {ChangeEvent, useState} from "react";

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks = (props: ProfileStatusType) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>("")
    const activatedMode = () => {
        setEditMode(true)
    }
    const deactivatedMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    }
    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activatedMode}>{props.status || "-----"}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange}
                       onBlur={deactivatedMode}
                       autoFocus={true}
                       value={status}/>
            </div>
            }
        </div>
    )
}




