import React, { useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
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
  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form>
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
        <input
          type="button"
          value="Continue with Email"
          onSubmit={onSubmit}
        ></input>
        <input
          type="button"
          value="Continue with Google"
          onSubmit={onSubmit}
        ></input>
        <input
          type="button"
          value="Continue with Github"
          onSubmit={onSubmit}
        ></input>
      </form>
    </div>
  );
};

export default Auth;
