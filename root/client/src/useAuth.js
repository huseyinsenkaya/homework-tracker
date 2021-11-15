import { useState } from "react";

function useAuth(initialValue) {
  const [isAuth, setIsAuth] = useState(initialValue);

  function login() {
    setTimeout(() => {
      setIsAuth(true);
    }, 1);
  }

  function logout() {
    setTimeout(() => {
      setIsAuth(false);
    }, 1);
  }
  return [isAuth, login, logout];
}

export default useAuth;
