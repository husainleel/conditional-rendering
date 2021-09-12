import React from "react";
import Login from "./Login";

var isLoggedIn = false;
function checkLogin() {
  if (isLoggedIn) {
    return <h1>Hello</h1>;
  } else {
    return <Login />;
  }
}

function App() {
  return (
    <div className="container">{isLoggedIn === false && <h1>Hello</h1>}</div>
  );
}

export default App;
