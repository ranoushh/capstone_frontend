import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import auth from "../redux/store";
import { useNavigate } from "react-router-dom";

// //handles both authorization and login/signup
// function AuthForm ({ name, displayName }) {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const isLoggedIn = useSelector((state) => !!state.user.id);

//     function handleSubmit(event){
//         event.preventDefault();
//         const formName = name;
//         const email = event.target.email.value;
//         const password = event.target.password.value;
//         dispatch(auth(email, password, formName));
//         navigate("/home");
//     };

//     return (
//         <div>
//             <form onSubmit = {handleSubmit}name = {name}>
//             <div>
//                 <label htmlFor="email">
//                     <small >Email</small>
//                 </label>
//                 <input name = "email" type = "text"/>
//             </div>
//             <div>
//                 <label htmlFor="password">
//                     <small >Password</small>
//                 </label>
//                 <input name = "password" type = "text"/>
//             </div>
//             <div>
//                 <button type= "submit" >{displayName}</button>
//             </div>
//             {/* {error && error.response && <div>{error.response.data}</div>} */}
//             </form>
//             <a href = "http://localhost:8080/auth/google">{displayName} with Google </a>
//         </div>
//     );
// };

// AuthForm.propTypes = {
//     name: PropTypes.string.isRequired,
//     displayName: PropTypes.string.isRequired
// };

// export const Login = AuthForm;
// export const Signup = AuthForm;
