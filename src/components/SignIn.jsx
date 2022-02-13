import "firebase/compat/firestore";
import "firebase/compat/auth";
import authFire from "../firebaseAuth";

const auth = authFire.firebase.auth();

const SignIn = () => {
    const signInWithGoogle = () => {
      const provider = new authFire.firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    };
  
    return (
      <div className="signIn">
        <button onClick={signInWithGoogle}>
          Sign in with Google
        </button>
        <p>
          Do not violate the community guidelines or you will be banned for life!
          <br/>
          <br/>
        <strong>A full stack web app created using react js ⚛️ and firebase 🔥</strong>
        </p>
      </div>
    );
  }
export default SignIn;