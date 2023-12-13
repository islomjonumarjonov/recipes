import { useRef } from "react";
import useSignup from "../hooks/useSignup";

function Signup() {
  const { signup, error, user } = useSignup();
  const displayName = useRef();
  const email = useRef();
  const password = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    signup(
      displayName.current.value,
      email.current.value,
      password.current.value
    );

    displayName.current.value = "";
    email.current.value = "";
    password.current.value = "";
  };
  return (
    <div className="forms px-20 py-6">
      <h2 className="text-3xl font-bold">Signup</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-1">
        <label>
          <span>Name:</span>
          <input className="bg-lime-200" ref={displayName} type="text" />
        </label>
        <label>
          <span>Email:</span>
          <input className="bg-lime-200" ref={email} type="email" />
        </label>
        <label>
          <span>Password:</span>
          <input className="bg-lime-200" ref={password} type="password" />
        </label>
        <div>
          <button className="btn">SignUp</button>
        </div>
        {error && (
          <div className="error">
            <h1>Warning:</h1>
            <p>{error}</p>
          </div>
        )}
      </form>
      <p>
        If you already signed up just{" "}
        <a href="login" className="underline">
          Login
        </a>
      </p>
    </div>
  );
}

export default Signup;
