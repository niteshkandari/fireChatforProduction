import React from "react";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/analytics";
import { useCollectionData } from "react-firebase-hooks/firestore";
import authFire from "../firebaseAuth";
import ChatMessage from "./ChatMessage";

const auth = authFire.firebase.auth();
const firestore = authFire.firebase.firestore();

const ChatRoom = () => {
    const scrollerRef = React.useRef();
    const messagesRef = firestore.collection("messagesProd");
    const query = messagesRef.orderBy("createdAt").limit(25);
    const [messages] = useCollectionData(query, { idField: "id" });
    const [formValue, setFormValue] = React.useState("");
  
    const sendMessage = async (e) => {
      e.preventDefault();
      const { uid, photoURL } = auth.currentUser;
  
      await messagesRef.add({
        text: formValue,
        createdAt: authFire.firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL,
      });
      setFormValue("");
      scrollerRef.current.scrollIntoView({ behavior: "smooth" });
    };
  
    return (
      <>
        <main>
          {messages &&
            messages.map((msg, idx) => (
              <ChatMessage
                key={Math.floor(Math.random() * msg.id + idx)}
                message={msg}
              />
            ))}
          <div ref={scrollerRef} />
        </main>
        <form onSubmit={sendMessage}>
          <input
            value={formValue}
            placeholder={"say something...."}
            onChange={(e) => setFormValue(e.target.value)}
          />
          <button type="submit" disabled={!formValue}>🐔</button>
        </form>
      </>
    );
  };

  export default ChatRoom;