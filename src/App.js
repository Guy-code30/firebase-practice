import logo from "./logo.svg";
import "./App.css";
import { auth } from "./firebase/init";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
function App() {
  function register() {
    console.log("register");
    createUserWithEmailAndPassword(auth, "email@email.com", "test123").then(
      (user) => {
        console.log9(user);
      }
    )
    .catch((error) => {
      console.log(error);
    });
  }

  function login() {
    console.log("login");
    signInWithEmailAndPassword(auth, 'Email', 'password')
      .then((user) => {
        // Signed in
        console .log(user);
        // ...
      }
      )
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="App">
      <button conClick={register}>Register</button>
      <button conClick={login}>Login</button>
    </div>
  );
}

export default App;
