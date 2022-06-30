import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string
    id: string
}

type MessageType = {
    message: string
}

const DialogItem = (props: DialogItemType) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};

const Message = (props: MessageType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Saule" id="1"/>
                <DialogItem name="Zhanat" id="2"/>
                <DialogItem name="Kamila" id="3"/>
                <DialogItem name="Zhalgas" id="4"/>
                <DialogItem name="Tamerlan" id="5"/>
                <DialogItem name="Temirlan" id="6"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="How are you?"/>
                <Message message="Yoyoyo"/>
                <Message message="Yoyoyo"/>
                <Message message="Yoyoyo"/>
            </div>
        </div>
    );
};

export default Dialogs;