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

    // await setPersistence(auth, browserLocalPersistence)
    //   .then(() => {
    //     return signInWithEmailAndPassword(auth, email, password).then(() => {
    //       setUserLoggedIn(true);
    //     });
    //   })
    //   .catch((error) => {
    //     setSubmitError(true);
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //   });
  };

  return (
    <div className="login flex flex-col items-center justify-evenly p-12">
      <form
        className="login__form flex flex-col items-center"
        autoComplete="off"
        onSubmit={(e) => login(e)}
      >
        {submitError && (
          <p className="text-white text-2xl mt-3">
            👀 Should I start tracking your IP? 🤔
          </p>
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
        <button type="submit" onClick={(e) => login(e)}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
