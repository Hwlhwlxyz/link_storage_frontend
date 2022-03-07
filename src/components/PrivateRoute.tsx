import { FC } from "react";
import { Navigate } from "react-router-dom";

export function PrivateRoute({ children }:{children:FC}) {
    const auth = useAuth();
    return auth ? children : <Navigate to="/login" />;
  }


function useAuth() {
    return true;
}

