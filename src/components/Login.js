import React, { useRef, useState } from "react";
import { validateForm } from "../utils/validateForm";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [validationMessage, setValidationMessage] = useState(null);
  const name = useRef();
  const email = useRef();
  const password = useRef();

  const handleSubmitAction = () => {
    const message = validateForm(
      name?.current?.value,
      email?.current?.value,
      password?.current?.value
    );
    setValidationMessage(message);
  };

  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-image"
        />
      </div>
      <form
        className="sm:w-7/12 md:w-5/12 lg:w-3/12 xl:w-23 p-12 rounded-lg absolute text-white bg-opacity-80 bg-black my-36 mx-auto right-0 left-0"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <h1 className="p-2 my-2 font-bold text-2xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            className="p-4 my-4 w-full bg-gray-700"
            type="text"
            ref={name}
            placeholder="Full Name"
          />
        )}
        <input
          className="p-4 my-4 w-full bg-gray-700"
          type="email"
          ref={email}
          placeholder="Email Address"
        />
        <input
          className="p-4 my-4 w-full bg-gray-700"
          type="password"
          ref={password}
          placeholder="Password"
        />
        <p className="text-red-600 text-md font-serif">{validationMessage}</p>
        <button
          className="p-4 my-4 text-lg bg-red-500 w-full rounded-lg"
          onClick={handleSubmitAction}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="py-4 cursor-pointer text-md font-mono"
          onClick={() => {
            setIsSignInForm(!isSignInForm);
          }}
        >
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already a user! Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
