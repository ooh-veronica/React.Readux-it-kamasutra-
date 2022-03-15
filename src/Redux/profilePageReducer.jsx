const ADD_POST = 'ADD-POST'
const URDATE_NEW_POST_TEXT = 'URDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'


let initialState = {
        postsData: [
            {id:1, message:'Hi, how are you?', likesCount: 12},
            {id:2, message:'Hi, it`s my first post?', likesCount: 15},
        ],
        newPostText: 'it-kamas',
        profile: null
}

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id:5, 
                message: state.newPostText,
                likesCount: 0, 
            }
            return {
                ...state,
                postsData : [...state.postsData,newPost],  // вместо push
                newPostText: ''//занулили
            } //создаем копию объекта, тк сам объект меня нельзя
        }
        
        case URDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText : action.newText
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile : action.profile
            }
        }
        default: 
            return state; // если придет не тот экшн

    }
    
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
    
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: URDATE_NEW_POST_TEXT, newText: text
    }
}
export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE, profile
    }
}




export default profileReducer