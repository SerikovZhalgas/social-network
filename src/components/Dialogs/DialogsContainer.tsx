import {ComponentType} from 'react';
import {InitialStateType, sendMessageCreator} from "../../Redux/dialogs-reducer";
import {AppStoreType} from "../../Redux/redux-store";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hok/withAuthRedirect";

type MapStatePropsType = {
    messagePage: InitialStateType
}
type MapDispatchPropsType = {
    sendMessage: (newMessageBody: string) => void
}
export type  DialogsPagePropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppStoreType): MapStatePropsType => {
    return {
        messagePage: state.messagePage,
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        sendMessage: (newMessageBody: string) => {
            dispatch(sendMessageCreator(newMessageBody))
        }
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);