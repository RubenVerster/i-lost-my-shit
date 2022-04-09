import {
  setPersistence,
  signInWithEmailAndPassword,
  browserLocalPersistence,
  getAuth,
} from "firebase/auth";

import { useState } from "react";

const Login = ({ setAuth, auth }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitError, setSubmitError] = useState(false);
  const [loading, setLoading] = useState(false);
  const FBAUTH = getAuth();
  const login = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      await setPersistence(FBAUTH, browserLocalPersistence);
      await signInWithEmailAndPassword(FBAUTH, email, password);
      await setAuth(true);
    } catch (error) {
      setEmail("");
      setPassword("");
      setSubmitError(true);
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <div className="login">
      <form
        className="login__form"
        autoComplete="off"
        onSubmit={(e) => login(e)}
      >
        {submitError && (
          <>
            <p className="error">Should I start tracking your IP?</p>
            <p> 🤔👀</p>
          </>
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
          className="form-control"
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
          className="form-control"
          id="exampleinput requiredPassword1"
          placeholder=""
        />
        <button disabled={loading} type="submit" onClick={(e) => login(e)}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
