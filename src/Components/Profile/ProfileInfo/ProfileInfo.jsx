import React from "react";
import Preloader from "../../Command/Preloader/Preloader";
import './ProfileInfo.css'

const ProfileInfo = (props) => {
  if(!props.profile) {
    return <Preloader />
  }
    return (
      <div className="pro">
       
        <div>
          <img src="https://klike.net/uploads/posts/2018-12/1544870354_1.jpg" />
        </div>
        <div className="descriptionBlock"> 
          <img src={props.profile.photos.large} />
          ava + description
        </div>
      </div>  
    )
}

export default ProfileInfo