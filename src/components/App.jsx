import React from "react";
import Login from "./Login";

var isLoggedIn = true;
function checkLogin() {
  if (isLoggedIn) {
    return <h1>Hello</h1>;
  } else {
    return <Login />;
  }
}

function App() {
  return <div className="container">{checkLogin()}</div>;
}

export default App;
