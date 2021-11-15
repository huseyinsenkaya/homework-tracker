import {Route, Navigate} from 'react-router-dom'
import AllTeachers from "./pages/AllTeachers";

const ProtectedRoute = ({ auth, element: Component, ...rest }) => {
  return (
    <Route path="/" element={<AllTeachers />} />
  );
};

export default ProtectedRoute
