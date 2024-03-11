import { useState, useRef } from "react";
import { checkValidData } from "../utils/validate";
import Header from "./Header";
import { signInUser, signUpUser } from "../api/authApi";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const selector = useSelector((store) => store.user);
  const navigate=useNavigate()
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(false);
  const [islogin, setlogin] = useState(false);
  const email = useRef(null);
  const password = useRef(null);
  const username = useRef(null);

  // const e=useSignIn(email,password,setErrorMessage,setlogin)

  const toggleSigninForm = () => {
    setIsSignInForm(!isSignInForm);
  };



  const handleButtonClick = () => {
    if (isSignInForm) {
      const message = checkValidData(
        email.current.value,
        password.current.value
      );
      if (message) {
        setErrorMessage(message);
        return;
      }
      const signInData = signInUser({
        email: email.current.value,
        password: password.current.value,
      });

      signInData.then((resp) => {
        setErrorMessage(resp.Message);
        setlogin(true);
        const { id, email, username } = resp.user;
        dispatch(addUser({ id: id, email: email, username: username }));
      });
    } else {
      const message = checkValidData(
        email.current.value,
        password.current.value,
        username.current.value
      );
      if (message) {
        setErrorMessage(message);
        return;
      }
      const signInData = signUpUser({
        email: email.current.value,
        password: password.current.value,
        username: username.current.value,
      });

      signInData.then((resp) => {
        setErrorMessage(resp.Message);
        setlogin(true);
      });
    }
  };
  if (selector) {
    navigate('/browse')
  }

  return (
    <div>
      <Header />

      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="logo"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12  p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "SignUp"}
        </h1>
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-800 "
        ></input>
        {!isSignInForm && (
          <input
            ref={username}
            type="text"
            placeholder="user name"
            className="p-2 my-4 w-full bg-gray-800"
          ></input>
        )}
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full bg-gray-800"
        ></input>
        <p className="text-red-500">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-600 w-full"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "SignUp"}
        </button>
        <p className="py-6 cursor-pointer" onClick={toggleSigninForm}>
          {isSignInForm
            ? "New to Netflix?Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
