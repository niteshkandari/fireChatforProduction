import React  from "react";
import "./App.css";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/analytics";
import ChatRoom from "./components/ChatRoom";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import authFire from "./firebaseAuth";
import { useAuthState } from "react-firebase-hooks/auth";

const auth = authFire.firebase.auth();


const App = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <span>🔥 🐔 FireChat</span>
        {user && <SignOut />}
      </header>
      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
}


export default App;
