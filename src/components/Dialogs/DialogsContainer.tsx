import React, {ComponentType} from 'react';
import {InitialStateType, sendMessageCreator, updateNewMessageCreator} from "../../Redux/dialogs-reducer";
import {AppStoreType} from "../../Redux/redux-store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hok/withAuthRedirect";

type MapStatePropsType = {
    messagePage: InitialStateType
}
type MapDispatchPropsType = {
    updateNewMessage: (body: string) => void
    sendMessage: () => void
}
export type  DialogsPagePropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppStoreType): MapStatePropsType => {
    return {
        messagePage: state.messagePage,
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        updateNewMessage: (body: string) => {
            dispatch(updateNewMessageCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}


export default compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);