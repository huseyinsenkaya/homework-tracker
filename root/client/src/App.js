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
import AddHomework from "./pages/AddHomework";
import Assignments from "./pages/Assignments";

function App() {
  const loggedIn = window.sessionStorage.getItem("userRole");
  const [isAuth, login, logout] = useAuth(Number(loggedIn));

  console.log(loggedIn);
  useEffect(() => {
    if (loggedIn === "0") {
      console.log("here");
      logout();
    } else {
      console.log("here");
      login();
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
              <LoginPrincipal isAuth={isAuth} login={login} logout={logout} />
            }
          />
          <Route
            path="/login-teacher"
            element={
              <LoginTeacher isAuth={isAuth} login={login} logout={logout} />
            }
          />
          {/* The Principal */}
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

          {/* The Teacher */}
          <Route
            path="/add-homework"
            element={
              <RequireAuth redirectTo="/login" isAuth={isAuth}>
                <AddHomework />
              </RequireAuth>
            }
          />
          <Route
            path="/assignments"
            element={
              <RequireAuth redirectTo="/login" isAuth={isAuth}>
                <Assignments />
              </RequireAuth>
            }
          />
        </Routes>
      </Layout>
    </div>
  );
}

function RequireAuth({ children, redirectTo, isAuth }) {
  return isAuth ? children : <Navigate to={redirectTo} />;
}

export default App;
