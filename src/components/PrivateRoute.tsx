import { FC, ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { loginStatus } from "../api/auth";

function PrivateRoute({ children }:{children:ReactElement<any, any>}) {
    const auth = useAuth();
    return auth ? children : <Navigate to="/login" />;
  }


function useAuth() {
    return loginStatus();
}

export default PrivateRoute;