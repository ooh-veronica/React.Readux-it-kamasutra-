import {combineReducers, createStore} from 'redux'
import dialogsReducer from './dialogsPageReducer copy'
import profileReducer from './profilePageReducer'
import sidebarReducer from './sidebarReducer copy'
import usersReducer from './UsersReducer'

let reducers = combineReducers({
    profileReducer: profileReducer ,
    dialogsReducer:  dialogsReducer,
    sidebar:  sidebarReducer ,
    usersPage: usersReducer,

})

let store = createStore(reducers)  

window.store = store

export default store