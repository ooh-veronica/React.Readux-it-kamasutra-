import React from "react"
import './Dialogs.css'
import dialogsReducer, { sendMessageCreator, updateNewMessageBodyCreator } from "../../Redux/dialogsPageReducer copy"
import Dialogs from "./Dialogs"
import {connect} from 'react-redux'

let mapStateToProps = (state) =>{
    return{
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        }, 
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}

let  DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer