import React from "react";
import "firebase/compat/auth";
import authFire from "../firebaseAuth";
const auth = authFire.firebase.auth();

const ChatMessage = ({message}) => {
    const { text, uid, photoURL } = message;
    const messageClass = uid === auth.currentUser.uid ? "sent" : "received";
    return (
      <div className={`message ${messageClass}`}>
        <img src={photoURL} alt={"photo"} />
        <p>{text}</p>
      </div>
    );
}

export default ChatMessage;