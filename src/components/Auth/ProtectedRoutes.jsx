import React, {useEffect} from "react";
import { useDispatch, useSelector} from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { me } from "../../redux/user";


export default function ProtectedRoutes() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => !!state?.user?.id);  useEffect(() => {

    const fetchMe = async () => {
      try {
        await dispatch(me());
      } catch (error) {
        console.log('error', error)
      }
    };
    fetchMe();
   // setLoading(false);
    // console.log("AppJSUseEffect");
    // dispatch(me());
    // setLoading(false);

  }, [dispatch, isLoggedIn]);

  return isLoggedIn ? <Outlet /> : <Navigate to= "/signup" />;
}
