import React, { useEffect, useReducer, useState } from "react";
import styles from "./Login.module.scss";
import { loginReducer } from "./LoginReducer/Login.reducer";
import http from "../../Services/Services";
import utility from "../../utility/utility";
import LoginButton from "../../components/LoginButton/LoginButton";
import Logout from "../../components/Logout/Logout";
import { gapi } from "gapi-script";
import {Link} from "react-router-dom"
const clientId =
  "169032020209-4n6qrcqku3kscjaofjqon8k2uc5vhb42.apps.googleusercontent.com";

export const Login = () => {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  });
  // var accessToken = gapi.auth.getToken().access_token;

  const [state, dispatch] = useReducer(loginReducer, {
    email: "",
    password: "",
  });
  console.log(state);


  const submitForm = async (event: any) => {
    event.preventDefault();
    let storeEntry = { email: state.email, password: state.password };
    try {
      let loginResponse = await http.post("auth/login", storeEntry);
      console.log(loginResponse);
      // utility.modifyStore("token", loginResponse.data.token);
      if (loginResponse.data.roleId === "635fb524e962be0f00a95d70") {
        // navigate("/admin")
      } else if (loginResponse.data.roleId === "635fb524e962be0f00a95d72") {
        // navigate("/clerk")
      } else if (loginResponse.data.roleId === "635fb524e962be0f00a95d71") {
        // navigate("/accountant")
      }
    } catch (e: any) {
      // setTimeout( ()=>setError(e), 800);
      console.log("error", e);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.center}>
        <h1>Login</h1>
        <form className={styles.loginForm} onSubmit={submitForm}>
          <div className={styles["text-field"]}>
            <input
              type="text"
              name="email"
              id="email"
              onChange={(e) => {
                dispatch({ type: "setEmail", payload: e.target.value });
              }}
              required
            />
            <span></span>
            <label htmlFor="email">Email</label>
          </div>
          <div className={styles["text-field"]}>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => {
                dispatch({ type: "setPassword", payload: e.target.value });
              }}
              required
            />
            <span></span>
            <label htmlFor="password">Password</label>
          </div>
          <div>
            <Link to="/forgotPassword" className={styles.forgotPassword}>
              Forgot Password?
            </Link>
          </div>
          {/* <div className={styles.loginButton}> */}
           <><LoginButton /></>
          {/* </div> */}
          {/* <span className={styles.error}>{error}</span> */}
          {/* <Button buttonText="submit" /> */}
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
};
