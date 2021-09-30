import React, { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const UseStateHook2 = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const handleLogin = () => {
    setUser({ name: "Pablo", email: "pablo_aimar@gmail.com" });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <h3>UseState Hook (type of state)</h3>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      {user ? (
        <>
          <h5>User name: {user.name}</h5> <h5>User email: {user.email}</h5>
        </>
      ) : null}
      {user?.name} {user?.email}
    </div>
  );
};

export default UseStateHook2;
