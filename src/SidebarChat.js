import React from "react";
import { Avatar } from "@material-ui/core";
import "./SidebarChat.css";

function SidebarChat({addNewChat}) {

   const createChat = () => {
       const roomName = prompt("please enter name for chat");

       if (roomName) {
           //do some DB stuff. .
       }
   };


    return !addNewChat ? (
        <div className="sidebarChat">
            <Avatar src={'https://avatars.dicebear.com/api/human/poon.svg'} />
            <div className="sidebarChat__info">
            <h2>Room name</h2> 
             <p>Last message . . </p> 
            </div>
            </div>

    ): (
        <div onClick={createChat} 
        className="sidebarChat">
            <h2>Add new Chat</h2>
        </div>
    )
}

export default SidebarChat
