import { createContext, useContext, useState, useLayoutEffect } from "react";
import { LOCAL_STORAGE_THEME_KEY } from "../helpers/localStorage";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
const initialTheme = () => localStorage.getItem(LOCAL_STORAGE_THEME_KEY);
const [theme, setTheme] = useState(initialTheme);
const toggleTheme = () =>
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
    useLayoutEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
        if (theme === "light") {
            document.documentElement.classList.remove("dark-theme");
            document.documentElement.classList.add("light-theme");
        } else {
            document.documentElement.classList.remove("light-theme");
            document.documentElement.classList.add("dark-theme");
        }
    }, [theme]);

return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
return context;
};
export { ThemeProvider, useTheme };