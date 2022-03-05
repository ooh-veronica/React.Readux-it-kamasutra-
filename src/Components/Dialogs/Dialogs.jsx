import React from "react"
import './Dialogs.css'
import DialogItem from '../Dialogs/DialogItem/DialogItem'
import Message from '../Dialogs/Message/Message'

function Dialogs(props) {

  let state = props.dialogsReducer

  let dialogsElements = state.dialogsData
    .map((item) => {
      return (
        <DialogItem name={item.name} key={item.id} id={item.id} />
    )
  })

  

  let messagesElements = state.messageData
    .map((item) => {
      return(
        <Message message={item.message} key={item.id} />
    )
  })

  let newMessageBody = state.newMessageBody

  let onNewMessageChange = (e) => {
    let body = e.target.value
    props.updateNewMessageBody(body)
  }

  let onSendMessageClick = () => {
    props.sendMessage()
  }


  return (
    <div className="dialogs">

      <div className="dialogs-items"> 
        {dialogsElements}

      </div>

      <div className="messages">
        <div>
          {messagesElements}
        </div>
        <div>
          <div>
            <textarea  
                placeholder="enter your message" 
                value={newMessageBody}
                onChange={onNewMessageChange}
            ></textarea>

          </div>
          <div>
            <button onClick={onSendMessageClick}>Закрепить</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs