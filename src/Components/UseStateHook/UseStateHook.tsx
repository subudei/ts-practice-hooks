import React, { useState } from "react";

const UseStateHook = () => {
  const [login, setLogin] = useState(false);
  const handleLogIn = () => {
    setLogin(true);
  };
  const handleLogOut = () => {
    setLogin(false);
  };
  return (
    <div>
      <button onClick={handleLogIn}>Log In</button>
      <button onClick={handleLogOut}>Log Out</button>
      {login ? <h5>User is Loged In</h5> : <h5>User is Loged Out</h5>}
    </div>
  );
};

export default UseStateHook;
