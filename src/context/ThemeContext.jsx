import { useEffect, useReducer } from "react";
import themeContext from "./themeContextValue.js";

const getInitialTheme = () => {
  if (typeof window === "undefined") return "light";
  return localStorage.getItem("shopkart-theme") || "light";
};

const initialState = {
  theme: getInitialTheme(),
};

function themeReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    case "setTheme":
      return {
        ...state,
        theme: action.payload === "dark" ? "dark" : "light",
      };
    default:
      return state;
  }
}

export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  useEffect(() => {
    localStorage.setItem("shopkart-theme", state.theme);
    document.documentElement.dataset.theme = state.theme;
    document.documentElement.style.colorScheme = state.theme;
  }, [state.theme]);

  const value = {
    state,
    dispatch,
  };

  return (
    <themeContext.Provider value={value}>{children}</themeContext.Provider>
  );
}
