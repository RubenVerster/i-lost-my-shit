import {
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
  browserLocalPersistence,
} from "firebase/auth";

import { useState } from "react";

const Login = ({ setAuth }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitError, setSubmitError] = useState(false);

  const auth = getAuth();

  const login = async (e: any) => {
    e.preventDefault();

    console.log("login");

    try {
      setPersistence(auth, browserLocalPersistence);
      await signInWithEmailAndPassword(auth, email, password);
      await setAuth(true);
    } catch (error) {
      setSubmitError(true);
      console.log(error);
    }
  };

  return (
    <div className="login">
      <form
        className="login__form"
        autoComplete="off"
        onSubmit={(e) => login(e)}
      >
        {submitError && (
          <p className="">👀 Should I start tracking your IP? 🤔</p>
        )}
        <input
          required
          value={email}
          onChange={(e) => {
            setSubmitError(false);
            setEmail(e.currentTarget.value);
          }}
          type="email"
          name="email"
          id="emailInput"
          aria-describedby="emailHelp"
          placeholder=""
        />
        <input
          required
          value={password}
          onChange={(e) => {
            setSubmitError(false);
            setPassword(e.currentTarget.value);
          }}
          type="password"
          name="password"
          id="exampleinput requiredPassword1"
          placeholder=""
        />
        <button type="submit" onClick={(e) => login(e)}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
