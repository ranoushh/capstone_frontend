// import { useSelector } from "react-redux";
// import { Outlet, Navigate } from "react-router-dom";

// export const ProtectedRoute = () => {
//     const registeredUser = useSelector((state) => !!state.user.id);
//     return registeredUser ? <Outlet/> : <Navigate to = "/login" />;
// };

//checks if state has user id, if it does we do Outlet, lets us render child
//component, otherwise just navigate to login page