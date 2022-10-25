import React from "react";
import {
  signInWithGoogle,
  signInWithGithub,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../utils/firebase/firebase.utils";
import { SocialIcon } from "react-social-icons";
import { useState } from "react";
import FormInput from "./form-input/form-input.component";

function SignInForm() {
  const defaultFormFields = {
    email: "",
    password: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, password } = formFields;

  const logGoogleUser = async () => {
    const response = await signInWithGoogle();
    const userDocRef = await createUserDocumentFromAuth(response.user);
  };

  const logGithubUser = async () => {
    const response = await signInWithGithub();
    const userDocRef = await createUserDocumentFromAuth(response.user);
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          console.log("User not found");
          break;
        case "auth/wrong-password":
          console.log("Wrong password");
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <div className="flex justify-evenly">
      <div className="flex flex-col my-40 px-8 items-center">
        <div className="flex flex-col">
          <p className="font-semibold text-blue-500">
            Sign In Here with Email and Password
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col pt-5">
            <FormInput
              label="Email"
              required
              type="email"
              className="w-full p-1 my-2 border rounded box-border px-2"
              name="email"
              value={email}
              onChange={handleOnChange}
              debounceTimeout={500}
            />
            <FormInput
              label="Password"
              required
              type="password"
              className="w-full p-1 my-2 border rounded box-border px-2"
              name="password"
              value={password}
              onChange={handleOnChange}
              debounceTimeout={500}
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center w-full p-1 mt-5 text-white border rounded bg-blue-500 border-blue-500 hover:bg-white hover:text-blue-500 transition ease-in-out duration-500"
            >
              Login
            </button>
          </form>
        </div>
        <div className="w-full text-center border-b border-solid leading-[0.1rem] mt-12 mb-10">
          <span className="bg-[#fff] px-2">or sign in with</span>
        </div>
        <button
          type="button"
          onClick={logGoogleUser}
          className="w-full p-1 font-semibold border rounded border-hidden hover:bg-gray-300 transition ease-in-out duration-500"
        >
          <SocialIcon className="mr-5" network="google" />
          Sign in with Google
        </button>
        <button
          type="button"
          onClick={logGithubUser}
          className="w-full my-1 p-1 font-semibold border rounded border-hidden hover:bg-gray-300 transition ease-in-out duration-500"
        >
          <SocialIcon className="mr-5" network="github" />
          Sign in with GitHub
        </button>
      </div>
    </div>
  );
}

export default SignInForm;
