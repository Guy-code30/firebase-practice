import React from "react";
import "./App.css";
import { auth, db } from "./firebase/init";
import { collection, addDoc, getDocs } from "firebase/firestore";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

function App() {
  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  function createPost() {
    const post = {
      title: "Land My first Job",
      description: "I am looking for a job",
    };
    addDoc(collection(db, "posts"), post);
  }


  async function getPosts() {
    const data = await getDocs(collection(db, "posts"));
    console.log(data);
  }

  React.useEffect(() => {
    setLoading(false);
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
  }, []);
  function register() {
    console.log("register");
    createUserWithEmailAndPassword(auth, "email@email.com", "test123")
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function login() {
    console.log("login");
    signInWithEmailAndPassword(auth, "email@email.com", "password")
      .then(({ user }) => {
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function logout() {
    signOut(auth);
    setUser({});
    console.log("logout");
  }

  return (
    <div className="App">
      <button onClick={register}>Register</button>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Log out</button>
      {loading ? "loading..." : user.email}
      <button onClick={createPost}>Create Post</button>
      <button onClick={getPosts}>Get Posts</button>
    </div>
  );
}

export default App;
