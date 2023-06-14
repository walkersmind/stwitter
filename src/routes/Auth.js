import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isUser, setUser] = useState(false);
  const [error, setError] = useState("");
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const auth = getAuth();

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let data;
      if (isUser) {
        console.log("회원가입");
        data = await createUserWithEmailAndPassword(auth, email, password);
      } else {
        console.log("로그인");
        data = await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const onSocialSignUp = (event) => {
    const {
      target: { name },
    } = event;

    let provider;

    if (name === "google") {
      provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = result.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const eamil = error.customData.eamil;
          const credential = GoogleAuthProvider.credentialFromError(error);
        });
    } else if (name === "github") {
      provider = new GithubAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GithubAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = result.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const eamil = error.customData.eamil;
          const credential = GithubAuthProvider.credentialFromError(error);
        });
    } else if (name === "facebook") {
      provider = new FacebookAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user;
          const credential = FacebookAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const eamil = error.customData.eamil;
          const credential = FacebookAuthProvider.credentialFromError(error);
        });
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="text"
          placeholder="Email"
          required
          onChange={onChange}
        ></input>
        <input
          name="password"
          type="text"
          placeholder="Password"
          required
          onChange={onChange}
        ></input>
        <input type="submit" value={isUser ? "Login" : "Sign Up"}></input>
        <button name="google" onClick={onSocialSignUp}>
          Continue with Google
        </button>
        <button name="github" onClick={onSocialSignUp}>
          Continue with Github
        </button>
        <button name="facebook" onClick={onSocialSignUp}>
          Continue with facebook
        </button>
      </form>
      <p>{error}</p>
    </div>
  );
};

export default Auth;
