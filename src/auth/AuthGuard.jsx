import { Navigate } from "react-router-dom";
import { useAuth } from "./useAuth";
import Loading from "../components/Loading";

// eslint-disable-next-line react/prop-types
export function AuthGuard( {children}) {
    const { isAuthenticated, isInit } = useAuth();
    
    if (!isInit) return <Loading />;

    if (isAuthenticated) return children;
    
    return <Navigate to="/bt4-client/log-in" />;
}
