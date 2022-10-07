import { async } from "@firebase/util";
import React from "react";
import {
  signInWithGoogle,
  signInWithGithub,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import { SocialIcon } from "react-social-icons";
import SignUp from "../../components/sign-up.component";

function SignIn() {
  const logGoogleUser = async () => {
    const response = await signInWithGoogle();
    const userDocRef = await createUserDocumentFromAuth(response.user);
  };

  const logGithubUser = async () => {
    const response = await signInWithGithub();
    const userDocRef = await createUserDocumentFromAuth(response.user);
  };

  return (
    <div className="flex justify-evenly">
      <div className="flex flex-col my-40 px-8 items-center">
        <button
          onClick={logGoogleUser}
          className="w-full my-1 p-1 font-semibold border rounded border-hidden hover:bg-gray-300 transition ease-in-out duration-500"
        >
          <SocialIcon className="mx-2" network="google" />
          Sign in with Google
        </button>
        <button
          onClick={logGithubUser}
          className="w-full my-1 p-1 font-semibold border rounded border-hidden hover:bg-gray-300 transition ease-in-out duration-500"
        >
          <SocialIcon className="mx-2" network="github" />
          Sign in with GitHub
        </button>
      </div>
      <div className="flex">
        <SignUp />
      </div>
    </div>
  );
}

export default SignIn;
