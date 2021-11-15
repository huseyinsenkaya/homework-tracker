//Default Student
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <form>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" required id="username" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" required id="password" />
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>

      <div>
        <Link to="/login-principal">Login Principal Account</Link>
        <Link to="/login-teacher">Login Teacher Account</Link>
      </div>
    </div>
  );
}

export default Login;
