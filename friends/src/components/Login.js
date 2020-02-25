import React, { useState } from "react";
// import { Formik, Field, Form, useField, FieldArray } from "formik";
import { TextField, Button } from "@material-ui/core";
// import * as yup from "yup";

import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = (props) => {
  console.log("checking props", props);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    isLoading: false
  });

  console.log("checking preset creds", credentials);

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const login = (e) => {
    e.preventDefault();
    setCredentials({
      isLoading: true
    });
    axiosWithAuth()
      .post("/api/login", credentials)
      .then((res) => {
        console.log(res);
        window.localStorage.setItem("token", res.data.payload);
        props.history.push("/friends");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form className="form" onSubmit={login}>
        <div className="input-field">
          <TextField
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            placeholder="Enter Username"
          />
        </div>
        <div className="input-field">
          <TextField
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
        </div>
        <Button type="submit">
          {" "}
          {credentials.isLoading ? (
            <i className="fa fa-cog fa-spin" />
          ) : (
            "Login"
          )}{" "}
        </Button>
      </form>
    </div>
  );
};

export default Login;
