import dialogsReducer from "./dialogsPageReducer copy"
import profileReducer from "./profilePageReducer"
import sidebarReducer from "./sidebarReducer copy"


let store = {
    _state : {


        profilePage: {
            postsData: [
                {id:1, message:'Hi, how are you?', likesCount: 12},
                {id:2, message:'Hi, it`s my first post?', likesCount: 15},
            ],
            newPostText: 'it-kamas'
            
        },
    
        messagesPage : {
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
        },
        
        sidebar: {}
    },
    getState() {
        return this._state
    },
    _callSubscriber () {
        console.log('State chsnged')
    },
    subcribe(observer) {
        this._callSubscriber = observer
   },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)

        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)

        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)

        
    }
}
 

export default store
window.store = store
// store - ООП
  