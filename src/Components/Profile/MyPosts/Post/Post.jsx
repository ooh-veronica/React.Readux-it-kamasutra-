import React from "react";
import './Post.css'

const Post = (props) => {

    return (
        <div className="item">
          <img src="https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg"></img>
          {props.message}

          <div>
            <span>{props.likesCount} like</span>
          </div>

        </div>

         

    )
}

export default Post