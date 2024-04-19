import "./App.css";
import AppRouter from "./Router/AppRouter";
import { RouterProvider } from "react-router-dom";
import ThemeContextProvider from "./context/ThemeContext";
function App() {
  return (
    <div className="app"> 
      <ThemeContextProvider>
        <RouterProvider router={AppRouter} />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
