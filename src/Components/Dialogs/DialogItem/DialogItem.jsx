import React from "react"
import './../Dialogs.css'
import { Link } from "react-router-dom"

const DialogItem = (props) => {
  
  return( 
    <div className="dialog">
          <Link to={'/dialogs/' + props.id}>
            {props.name}
          </Link>
        </div>
  )
}





export default DialogItem