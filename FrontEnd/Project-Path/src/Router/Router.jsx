import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Addideas from "../Pages/Addideas"
import Ideas from "../Pages/Ideas"
const Router = createBrowserRouter([
  {
    path: "/App",
    element: <App />,
  },
  {
    path: "/",
    element: <Ideas />,
  },
  {
    path: "/AddIdeas",
    element: <Addideas />,
  },
 
 
]);
export default Router;
