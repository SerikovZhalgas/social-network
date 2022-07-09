import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {MessagePageType} from "../../Redux/state";

type DialogsPropsType = {
    state:MessagePageType
}

const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements =  props.state.dialogsData.map(d => <DialogItem id={d.id} name={d.name} avatar={d.avatar}/>)
    let messageElements = props.state.messageData.map(m => <Message id={m.id} message={m.message} myMessage={m.myMessage} avatar={m.avatar}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    );
};

export default Dialogs;