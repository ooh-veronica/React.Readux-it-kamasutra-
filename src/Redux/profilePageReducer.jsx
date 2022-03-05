const ADD_POST = 'ADD-POST'
const URDATE_NEW_POST_TEXT = 'URDATE-NEW-POST-TEXT'


let initialState = {
        postsData: [
            {id:1, message:'Hi, how are you?', likesCount: 12},
            {id:2, message:'Hi, it`s my first post?', likesCount: 15},
        ],
        newPostText: 'it-kamas',
}

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id:5, 
                message: state.newPostText,
                likesCount: 0, 
            }
            let stateCopy = {
                ...state,
                postsData : [...state.postsData,newPost],  // вместо push
                newPostText: ''//занулили
            } //создаем копию объекта, тк сам объект меня нельзя

            return stateCopy
        }
        
        case URDATE_NEW_POST_TEXT: {
            let stateCopy = {
                ...state,
                newPostText : action.newText
            }

            return stateCopy;
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


export default profileReducer