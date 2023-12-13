import { Link } from "react-router-dom";
import { useRef } from "react";
import useLogin from "../hooks/useLogin";

function Login() {
  const { login, user, error } = useLogin();
  const email = useRef();
  const password = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email.current.value, password.current.value);

    email.current.value = "";
    password.current.value = "";
  };
  return (
    <div className="forms px-20 py-6">
      <h2 className="text-3xl font-bold">Login</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <label>
          <span>Email:</span>
          <input className="bg-lime-200" ref={email} type="email" />
        </label>
        <label>
          <span>Password:</span>
          <input className="bg-lime-200" ref={password} type="password" />
        </label>
        <div>
          <button className="btn">Login</button>
        </div>
        {error && (
          <div className="error">
            <h1>Warning:</h1>
            <p>{error}</p>
          </div>
        )}
      </form>
      <p>
        If you don't have account, please{" "}
        <a className="underline" href="signup">
          Signup
        </a>
      </p>
    </div>
  );
}

export default Login;
