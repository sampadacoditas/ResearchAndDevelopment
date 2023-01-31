
import { Button } from "@mui/material";
import { Formik } from "formik";
import { Component, createContext, useEffect, useState } from "react";
import http from "../../Services/Services";
// import styles from "./ResetPassword..module.scss"
import styles from "./ResetPassword.module.scss"
export default class ResetComponent extends Component<any,any>{
  ForgotPasswordSchema: any;
  navigate:any
  initialValues: { password: string ,confirmPassword:string};
  constructor(props: any) {
    super(props);
    this.initialValues = { password: "" ,confirmPassword:""};
  }

  handleSubmit = async (values: any, setSubmitting: any) => {
    console.log(values);
    try {
      let ResetPassword = await http.post("auth/forgot-password", values);
      console.log(ResetPassword.data.token);
    } catch (e: any) {
      console.log("error")
    }
  };
  render() {
    
    return (
      <>
        <div className={styles.loginContainer}>
          <div className={styles.center}>
            {/* <div className={styles.image}>Image</div> */}
            <h1>ResetPassword</h1>
            <Formik
              initialValues={this.initialValues}
              validationSchema={this.ForgotPasswordSchema}
              onSubmit={(values, { setSubmitting }) =>
                this.handleSubmit(values, setSubmitting)
              }
            >
              {({
              
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                
              }) => (
                <form className={styles.loginForm} onSubmit={handleSubmit}>
                  <div className={styles["text-field"]}>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      
                    />
                    <span></span>
                    <label htmlFor="password">
                      Password{" "}
                      <span>
                        {errors.password && touched.password && errors.password}
                      </span>
                    </label>
                  </div>

                  <div className={styles["text-field"]}>
                    <input
                      type="password"
                      name="confirmPassword"
                      id="confirmPassword"
                      value={values.confirmPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      
                    />
                    <span></span>
                    <label htmlFor="confirmPassword">
                    confirmPassword{" "}
                      <span>
                        {errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}
                      </span>
                    </label>
                  </div>
                  <input type="submit" value="submit" />
                </form>
              )}
            </Formik>
          </div>
        </div>
      </>
    );
  }
}

