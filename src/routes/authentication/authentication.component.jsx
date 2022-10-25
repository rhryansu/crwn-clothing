import React from "react";
import SignInForm from "../../components/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form.component";

function Authentication() {
  return (
    <div className="flex justify-evenly">
      <SignInForm />
      <div className="border-l border-slate-400/50"></div>
      <SignUpForm />
    </div>
  );
}

export default Authentication;
