import { useState } from "react";

function useAuth(initialValue) {
  const [isAuth, setIsAuth] = useState(initialValue);

  function login() {
    setTimeout(() => {
      setIsAuth(true);
    }, 100);
  }

  function logout() {
    setTimeout(() => {
      setIsAuth(false);
    }, 100);
  }
  return [isAuth, login, logout];
}

export default useAuth;
