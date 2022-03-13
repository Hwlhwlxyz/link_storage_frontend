import { FC, ReactElement } from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }:{children:ReactElement<any, any>}) {
    const auth = useAuth();
    return auth ? children : <Navigate to="/login" />;
  }


function useAuth() {
    return true;
}

export default PrivateRoute;