import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/layout/Root";
import Home from "../pages/Home/Home";
import AddUser from "../pages/AddUser/AddUser";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addUser",
        element: <AddUser></AddUser>,
      },
    ]
  },
]);

export default routes;
