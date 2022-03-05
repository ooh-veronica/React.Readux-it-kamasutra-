import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import './Profile.css'
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  console.log('props profile', props)
  

    return (
      <div className="">
        <ProfileInfo />
        <MyPostsContainer 
            store = {props.store}
            
        />
      </div>  
    )
}

export default Profile