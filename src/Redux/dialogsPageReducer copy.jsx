const URDATE_NEW_MESSAGE_BODY = 'URDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'


let initialState = {
        messageData:[
            {message:'Hi'},
            {message:'How are you?'},
            {message:'Yooo'},
        ],
        dialogsData : [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Victor'},
            {id: 6, name: 'Valera'},
        ],
        newMessageBody : ''
}

const dialogsReducer = (state = initialState, action) => {

    switch(action.type) {
        case URDATE_NEW_MESSAGE_BODY: {
            let stateCopy = {
                ...state,
                newMessageBody: action.body
            }
            return stateCopy
        }
        case SEND_MESSAGE:{
            let body = state.newMessageBody
            let stateCopy = {
                ...state,
                newMessageBody: '', 
                messageData: [...state.messageData,{id: 6, message: body}],  //вместо push

            }
            return stateCopy
        }
        default: 
            return state

    }
}

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export const updateNewMessageBodyCreator = (body) => {
    return {
        type:  URDATE_NEW_MESSAGE_BODY, body: body
    }
}

export default dialogsReducer