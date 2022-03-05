import React from "react";
// import styles from './Users.css'
import userPhoto from './../../assets/images/userPhoto.jpg'

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize); 

    let pages = []

    for(let i= 1; i <= pagesCount; i++){
        pages.push(i)
    }

    return <div>
    {/* <div>
        {pages.map((item) => {
            return <span className={props.currentPage === item && selectedPage} onClick={ (e) => {props.onPageChanged(item)}}>{item}</span> 
            
        })}
        <span>1</span>
        <span className="selectedPage">2</span>
        <span>3</span>
        <span>4</span>
        <span>4</span>
    </div> */}
   
    {
        props.users.map(item => <div>
           
            <span>
                <div>
                    <img src={item.photos.small != null ? item.photos.small : userPhoto} className='userPhoto'/>
                </div>
                <div>
                    {item.followed ? 
                    <button onClick={props.unfollow(item.id)}>UNFOLLOW</button> 
                    : <button onClick={props.follow(item.id)}>FOLLOW</button> }
                    
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