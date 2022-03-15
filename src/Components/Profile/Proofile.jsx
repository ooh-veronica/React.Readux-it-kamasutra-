import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import './Profile.css'
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  

    return (
      <div className="">
        <ProfileInfo profile={props.profile} />
        <MyPostsContainer/>
      </div>  
    )
}

export default Profile