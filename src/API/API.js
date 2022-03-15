import axios from 'axios'


const instance =  axios.create({
    withCredentials: true, 
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:  {
        "API-KEY": "a6204c8c-97c2-4758-b44a-fdb948ccd036"
    }
})

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
           return response.data
            })
    }
}



// + в Instance забит базовый url


// export const getUsers2 = (currentPage = 1, pageSize = 10) => {
//     return axios.get(baseUrl + `/users?page=${currentPage}&count=${pageSize}`, {
//         withCredentials: true
//     }).then(response => {
//        return response.data
//         })
// }  СДЕЛАТЬ FOLLOW

