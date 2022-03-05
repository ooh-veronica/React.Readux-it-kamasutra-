import React from "react";
import './MyPosts.css'
import Post from "./Post/Post";


const MyPosts = (props) => {

  
  let postsElements = props.postsData
    .map((item) => {
    return (
      <Post likesCount={item.likesCount} message={item.message} />
    )
  })

  let newPostElement = React.createRef()

  let onAddPost = () =>{
    props.addPost()
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text)
  }

    return (
        
      <div className="postsBlock">

        <h3>My Posts</h3>

        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>

        <div className="posts">New Post
          {postsElements}
        </div>

      </div>
 
    )
}

export default MyPosts