import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Auth = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isUser, setUser] = useState(false);
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
      if (!isUser) {
        console.log("회원가입");
        data = await createUserWithEmailAndPassword(auth, email, password);
      } else {
        console.log("로그인");
        data = await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (error) {
      console.log(error);
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
        <input type="submit" value="Continue with Google"></input>
        <input type="submit" value="Continue with Github"></input>
      </form>
    </div>
  );
};

export default Auth;
