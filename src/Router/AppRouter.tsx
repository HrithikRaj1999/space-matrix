import Home from "../page/Home";
import About from "../page/About";
import Layout from "../component/Layout";
import { createBrowserRouter } from "react-router-dom";
const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
    ],
  },
]);

export default AppRouter;
