import React, {
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from "react";

type StateType = "light" | "dark";

interface ContextType {
  mode: StateType;
  setMode: React.Dispatch<SetStateAction<StateType>>;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ContextType>({
  mode: "light",
  setMode: () => {},
  toggleTheme: () => {},
});

const ThemeContextProvider = ({ children }: PropsWithChildren) => {
  const [mode, setMode] = useState<StateType>("light");

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ mode, setMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
