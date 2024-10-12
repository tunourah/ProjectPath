import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import ErrorPage from "../Pages/ErrorPage";

import Addideas from "../Pages/Addideas"
import Ideas from "../Pages/Ideas"
const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/Ideas",
    element: <Ideas />,
  },
  {
    path: "/AddIdeas",
    element: <Addideas />,
  },
 
 
]);
export default Router;
