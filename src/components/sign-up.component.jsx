import React, { useState } from "react";
import { DebounceInput } from "react-debounce-input";
import { createAuthUserWithEmailAndPassword } from "../utils/firebase/firebase.utils";
import { ReactComponent as Tick } from "../assets/icons8-done.svg";

function SignUp() {
  const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  console.log(formFields);

  const handleSubmit = async (event) => {

    event.preventDefault();
    
    if (event.target.password.value !== event.target.confirmPassword.value) {
      alert("Passwords don't match");
      return;
    } else {
      if (1 === 0) await createAuthUserWithEmailAndPassword(email, password);

      setBtnStatus("Processing...");
      await timeout(3000);
      setBtnStatus("Success");
      await timeout(2000);
      setBtnStatus("Sign Up");
    }
  };

  function timeout(delay) {
    return new Promise((res) => setTimeout(res, delay));
  }

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const [btnStatus, setBtnStatus] = useState("Sign Up");

  return (
    <div className="flex flex-col justify-center">
      <h1 className="font-semibold text-blue-500">
        Sign Up Here with Email and Password
      </h1>
      <form className="mt-4 flex flex-col items-start" onSubmit={handleSubmit}>
        <label>Display Name</label>
        <DebounceInput
          required
          type="text"
          className="w-full p-1 my-2 border rounded"
          name="displayName"
          value={displayName}
          onChange={handleOnChange}
          debounceTimeout={500}
        />

        <label>Email</label>
        <DebounceInput
          required
          type="email"
          className="w-full p-1 my-2 border rounded"
          name="email"
          value={email}
          onChange={handleOnChange}
          debounceTimeout={500}
        />

        <label>Password</label>
        <DebounceInput
          required
          type="password"
          className="w-full p-1 my-2 border rounded"
          name="password"
          value={password}
          onChange={handleOnChange}
          debounceTimeout={500}
          pattern=".{6,}"
          title="6 characters minimum"
        />

        <label>Confirm Password</label>
        <DebounceInput
          required
          type="password"
          className="w-full p-1 my-2 border rounded"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleOnChange}
          debounceTimeout={500}
          pattern=".{6,}"
          title="6 characters minimum"
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center w-full p-1 mt-2 text-white border rounded bg-blue-500 border-blue-500 hover:bg-white hover:text-blue-500 transition ease-in-out duration-500"
        >
          {btnStatus === "Processing..." ? (
            <svg
              class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : null}
          {btnStatus === "Success" ? <Tick className="invert mr-2" /> : null}
          {btnStatus}
        </button>
      </form>
    </div>
  );
}

export default SignUp;
