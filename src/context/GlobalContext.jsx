import { createContext, useReducer, useEffect } from "react";

export const GlobalContext = createContext();

const changeState = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "LOGIN":
      return { ...state, user: payload };
    case "LOGOUT":
      return { ...state, user: null };
    case "IS_AUTH_CHANGE":
      return { ...state, isAuthChange: true };
    case "UID":
      return { ...state, uid: payload };
    case "DOC_ID":
      return { ...state, docId: payload };
    case "CHANGE_MODE":
      return { ...state, mode: payload };
    case "DOCS_CHANGE":
      return { ...state, docs: payload };
    default:
      return state;
  }
};

export function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(changeState, {
    user: null,
    isAuthChange: false,
    uid: "1",
    docId: null,
    mode: "light",
    docs: null,
  });

  const changeMode = (mode) => {
    dispatch({ type: "CHANGE_MODE", payload: mode });
  };

  useEffect(() => {
    if (state.mode === "dark") document.body.classList.add("dark-mode");
    else document.body.classList.remove("dark-mode");
  }, [state.mode]);

  return (
    <GlobalContext.Provider value={{ ...state, dispatch, changeMode }}>
      {children}
    </GlobalContext.Provider>
  );
}
