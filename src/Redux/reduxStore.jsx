import {combineReducers, createStore} from 'redux'
import authReducer from './AuthReducer'
import dialogsReducer from './dialogsPageReducer copy'
import profileReducer from './profilePageReducer'
import sidebarReducer from './sidebarReducer copy'
import usersReducer from './UsersReducer'

let reducers = combineReducers({
    profilePage: profileReducer ,
    dialogsPage:  dialogsReducer,
    sidebar:  sidebarReducer ,
    usersPage: usersReducer,
    auth: authReducer,

})

let store = createStore(reducers)  

window.store = store

export default store


