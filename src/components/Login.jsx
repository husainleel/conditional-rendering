import React from "react";
import Input from "./Input";

function Login() {
  return (
    <form className="form">
      <Input text="text" placeholder="Username" />
      <Input text="password" placeholder="Password" />
    </form>
  );
}

export default Login;
