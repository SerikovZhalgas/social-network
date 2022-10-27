import React, {ChangeEvent, useEffect, useState} from "react";

type ProfileStatusType = {
    status: string
    updateUserStatus:(newStatus:string)=>void
}

const ProfileStatus = (props: ProfileStatusType) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [inputValue, setInputValue] = useState<string>(props.status)

    useEffect(()=>{
        setInputValue(props.status)
    },[props.status])
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>)=> {
        setInputValue(e.currentTarget.value)
    }
    const onDoubleClick = () => {
        setEditMode(!editMode)
    }
    const onBlurHandler = () => {
        setEditMode(!editMode)
        props.updateUserStatus(inputValue)
    }
    return (
        <div>
            {editMode
                ?
                <div>
                    <input
                        autoFocus
                        value={inputValue}
                        onBlur={onBlurHandler}
                        onChange={onChangeHandler}
                    />
                </div>
                :
                <div>
                    <b>Status: </b>
                    <span onDoubleClick={onDoubleClick}>
                        {props.status}
                    </span>
                </div>
            }
        </div>
    );
}
export default ProfileStatus;