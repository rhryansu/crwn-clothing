import React, { useState } from "react";

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

  const handleChange = () => {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.handleOnChange();
    }, 1000);
  }

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="flex flex-col justify-center">
      <h1 className="font-semibold text-blue-500">
        Sign Up Here with Email and Password
      </h1>
      <form className="mt-4 flex flex-col items-start">
        <label>Display Name</label>
        <input
          required
          type="text"
          className="w-full p-1 my-2 border rounded"
          name="displayName"
          value={displayName}
          onChange={handleChange}
        />

        <label>Email</label>
        <input
          required
          type="email"
          className="w-full p-1 my-2 border rounded"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <label>Password</label>
        <input
          required
          type="password"
          className="w-full p-1 my-2 border rounded"
          name="password"
          value={password}
          onChange={handleChange}
        />

        <label>Confirm Password</label>
        <input
          required
          type="password"
          className="w-full p-1 my-2 border rounded"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="w-full p-1 mt-2 text-white border rounded bg-blue-500 border-blue-500 hover:bg-white hover:text-blue-500 transition ease-in-out duration-500"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
