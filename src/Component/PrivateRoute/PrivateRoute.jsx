import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const auth=localStorage.getItem("loggedin");
 
  return auth ? children : <Navigate to="/" />;
};

export default PrivateRoute;
