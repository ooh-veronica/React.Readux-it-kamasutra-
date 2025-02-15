const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWIND_PROGRESS = 'TOGGLE_IS_FOLLOWIND_PROGRESS'

let initialState = {
    users: [ ], 
    pageSize:  10, 
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}


const usersReducer = (state = initialState, action) => {

    

    switch(action.type) {
        case FOLLOW: {
            let stateCopy = {
                ...state, 
                users: state.users.map(item => {
                    if(item.id === action.userId){
                        return {...item, followed: true}
                    }
                    return item
                }) 

            }
            return stateCopy
        }
        
        case UNFOLLOW: { 
            let stateCopy = {
                ...state, 
                users: state.users.map((item) => {
                    if(item.id === action.userId){
                        return {...item, followed: false}
                    }
                    return item
                }) 

            }
            return stateCopy;
        }

        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage:action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount:action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching:action.isFetching}
        }
        case TOGGLE_IS_FOLLOWIND_PROGRESS: {
            return {
                ...state,
                followingInProgress:action.isFetching ? 
                [
                    ...state.followingInProgress, action.userId
                ]
                : 
                    state.followingInProgress.filter(id => id != action.userId)
                }
        }
        
        default: 
            return state; // если придет не тот экшн

    }
    
}

export const follow = (userId) => {
    return {
        type: FOLLOW, userId
    }
}
    
export const unfollow = (userId) => {
    return {
        type: UNFOLLOW, userId
    }
}
export const setUsers = (users) => {
    return {
        type: SET_USERS, users:users
    }
}
export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE, currentPage: currentPage
    }
}
export const setTotalUsersCount  = (totalUsersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT, count: totalUsersCount
    }
}
export const toggleIsFetching  = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING, isFetching
    }
}
export const toggleFollowingProgress  = (isFetching, userId) => {
    return {
        type: TOGGLE_IS_FOLLOWIND_PROGRESS, isFetching, userId
    }
}

export default usersReducer