import { signOut } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import { useGlobalContext } from "./useGlobalContext";

function useLogout() {
  const [error, setError] = useState(null);
  const { dispatch } = useGlobalContext();

  const logout = () => {
    signOut(auth)
      .then(() => {
        dispatch({ type: "LOGOUT" });
      })
      .catch(() => {
        setError("Something went wrong");
      });
  };
  return { logout, error };
}

export default useLogout;
