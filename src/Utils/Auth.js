import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { me } from "../redux/user";

export default function ProtectedRoute({ isLoggedIn }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(me());
  }, [dispatch]);

  console.log("protected is logged in ", isLoggedIn);
  if(isLoggedIn){
    console.log("if true reached");
   return <Outlet/>
  }else{
    console.log("else false reached")
    return <Navigate to="/login" />
  }
  // return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}