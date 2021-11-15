import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";


function LoginPrincipal(props) {
  const navigate = useNavigate();
  const userNameInputRef = useRef();
  const passwordInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    //For testing
    if (
      userNameInputRef.current.value === "Admin" &&
      passwordInputRef.current.value === "Admin123"
    ) {
      window.sessionStorage.setItem("userId", "1");
      props.login();
      navigate("/");
    } else {
      navigate("/login-principal");
    }
  }

  return (
    <div className="login">
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" required id="username" ref={userNameInputRef} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            required
            id="password"
            ref={passwordInputRef}
          />
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>

      <div>
        <Link to="/login">Login Student Account</Link>
        <Link to="/login-teacher">Login Teacher Account</Link>
      </div>
    </div>
  );
}

export default LoginPrincipal;
