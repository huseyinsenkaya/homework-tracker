import { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

//Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import AddStudent from "./pages/AddStudent";
import AllStudents from "./pages/AllStudents";
import AddTeacher from "./pages/AddTeacher";
import AllTeachers from "./pages/AllTeachers";

//Components
import Layout from "./components/layout/Layout";

//Protected Route
import ProtectedRoute from "./ProtectedRoute";

//Auth
import useAuth from "./useAuth";

//Login
import LoginPrincipal from "./pages/LoginPrincipal";
import LoginTeacher from "./pages/LoginTeacher";

function App() {
  const loggedIn = window.sessionStorage.getItem("userId");
  const [isAuth, login, logout] = useAuth(Number(loggedIn));

  console.log(loggedIn);
  useEffect(() => {
    if (loggedIn === "1") {
      console.log("here");
      login();
    } else {
      console.log("here");
      logout();
    }
  }, []);

  return (
    <div>
      <Layout isAuth={isAuth}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/login-principal"
            element={
              <LoginPrincipal isAuth={isAuth} login={login} logout={logout} s />
            }
          />
          <Route path="/login-teacher" element={<LoginTeacher />} />

          <Route
            path="/add-teacher"
            element={
              <RequireAuth redirectTo="/login" isAuth={isAuth}>
                <AddTeacher />
              </RequireAuth>
            }
          />
          <Route
            path="/all-teachers"
            element={
              <RequireAuth redirectTo="/login" isAuth={isAuth}>
                <AllTeachers />
              </RequireAuth>
            }
          />
          <Route
            path="/all-students"
            element={
              <RequireAuth redirectTo="/login" isAuth={isAuth}>
                <AllStudents />
              </RequireAuth>
            }
          />

          <Route
            path="/add-student"
            element={
              <RequireAuth redirectTo="/login" isAuth={isAuth}>
                <AddStudent />
              </RequireAuth>
            }
          />
        </Routes>
      </Layout>
    </div>
  );
}

function RequireAuth({ children, redirectTo, isAuth }) {
  console.log(isAuth);
  return isAuth ? children : <Navigate to={redirectTo} />;
}

export default App;
