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
  const [isAuth, login, logout] = useAuth(false);

  useEffect(() => {
    const loggedIn = window.sessionStorage.getItem("userId");
    console.log(loggedIn);
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
              <RequireAuth redirectTo="/login" auth={isAuth}>
                <AddTeacher />
              </RequireAuth>
            }
          />

          {/* <Route path="/add-teacher" element={<AddTeacher />} /> */}
          <Route path="/all-teachers" element={<AllTeachers />} />
          <Route path="/add-student" element={<AddStudent />} />
          <Route path="/all-students" element={<AllStudents />} />
        </Routes>
      </Layout>
    </div>
  );
}

function RequireAuth({ children, redirectTo, isAuth }) {
  return isAuth ? children : <Navigate to={redirectTo} />;
}

export default App;
