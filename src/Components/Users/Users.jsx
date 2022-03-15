import React from "react";
import styles from './Users.css'
import userPhoto from './../../assets/images/userPhoto.jpg'
import {Link} from 'react-router-dom'
import axios from 'axios'

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize); 

    let pages = []

    for(let i= 1; i <= pagesCount; i++){
        pages.push(i)
    }



    return <div>
        <div>
            {pages.map((item) => {
                return <span className={props.currentPage === item && "selectedPage"} onClick={ (e) => {props.onPageChanged(item)}}>{item}</span> 
                
            })}
            {/* <span>1</span>
            <span className="selectedPage">2</span>
            <span>3</span>
            <span>4</span>
            <span>4</span> */}
        </div>
   
    {
        props.users.map(item => <div>
           
            <span>
                <div>
                    <Link to={"/profile/" + item.id}>
                        <img src={item.photos.small != null ? item.photos.small : userPhoto} className='userPhoto'/>
                    </Link>
                </div>
                <div>
                    {item.followed 

                    ? 
                    <button disabled={props.followingInProgress.some(id => id === item.id)} onClick={() => {
                        props.toggleFollowingProgress(true, item.id)
                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${item.id}`, {
                            withCredentials: true,
                            headers:  {
                            "API-KEY": "a6204c8c-97c2-4758-b44a-fdb948ccd036"
                            }
                        })
                            .then(response => {
                                if(response.data.resultCode ===0){
                                    props.unfollow(item.id)
                                }
                                props.toggleFollowingProgress(false, item.id)
                            });
                        }}>UNFOLLOW
                    </button> 

                    : 
                    <button disabled={props.followingInProgress.some(id => id === item.id)} onClick={() =>{
                        props.toggleFollowingProgress(true, item.id)
                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${item.id}`, {}, {
                            withCredentials: true,
                            headers:  {
                                "API-KEY": "a6204c8c-97c2-4758-b44a-fdb948ccd036"
                            } 
                        })
                            .then(response => {
                                if(response.data.resultCode ===0){
                                    props.follow(item.id)
                                }
                                props.toggleFollowingProgress(false, item.id)
                            });
                    }}>FOLLOW
                    </button> }
                    
                </div>
            </span>
            <span>
                <span>
                    <div>{item.name}</div>
                    <div>{item.status}</div>
                </span>
                <span>
                    <div>{"item.location.country"} </div>
                    <div> {"item.location.city"}</div>
                </span>
            </span>
        </div>)
    }

</div>
}

export default Users