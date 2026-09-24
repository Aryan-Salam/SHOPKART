import { useContext } from "react";
import themeContext from "./themeContextValue.js";

export { themeContext };

export function useTheme() {
  const context = useContext(themeContext);

  if (!context) {
    throw new Error("useTheme must be used inside a ThemeProvider");
  }

  return context;
}
