import "firebase/compat/firestore";
import "firebase/compat/auth";
import authFire from "../firebaseAuth";

const auth = authFire.firebase.auth();

const SignOut = () => {
    return (
      auth.currentUser && (
        <button className="signOut" onClick={() => auth.signOut()}>
          Sign Out
        </button>
      )
    );
  }

  export default SignOut;