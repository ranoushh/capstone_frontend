// import { useEffect,useState } from "react";
// import { useDispatch } from "react-redux";
// import { Outlet, Navigate } from "react-router-dom";
// import { me } from "../redux/user";

// export default function ProtectedRoute({ isLoggedIn }) {
//   // const dispatch = useDispatch();
//   // useEffect(() => {
//   //   dispatch(me());
//   // }, [dispatch]);

//   // const [loading, setLoading] = useState(true);
//   // const [loggedIn, setLoggedIn] = useState(false);

//   // useEffect(() => {
//   //   let mounted = true;
//   //   const loggedInStatus = async () => {
//   //     const result = await isLoggedIn()
//   //     // if(mounted) {
//   //     //   setLoggedIn(result);
//   //     //   setLoading(false);
//   //     // }
//   //   }
//   //   loggedInStatus();
//   //   return () => {mounted= false;}

//   // }
//   // , [isLoggedIn]
//   // )
//   // console.log("protected is logged in ", isLoggedIn);
//   // if(loading){
//   //   console.log("if true reached");
//   //  return <div> isLoading </div>
//   // }
  
//   // }else{
//   //   console.log("else false reached")
//   //   return <Navigate to="/login" />
//   // }
//   return isLoggedIn ? <Outlet /> : <Navigate to="/signup" />;
// }