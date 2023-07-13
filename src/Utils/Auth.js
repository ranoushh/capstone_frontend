import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

export const ProtectedRoute = () => {
    const registeredUser = useSelector((state) => !!state.user.id);
    return registeredUser ? <Outlet/> : <Navigate to = "/login" />;
}