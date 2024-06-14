import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/layout/Root";
import Home from "../pages/Home/Home";
import AddUser from "../pages/AddUser/AddUser";
import UpdateUser from "../pages/UpdateUser/UpdateUser";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:3000/users"),
      },
      {
        path: "/addUser",
        element: <AddUser></AddUser>,
      },
      {
        path: "/updateUser/:id",
        element: <UpdateUser></UpdateUser>,
        loader: ({ params }) => fetch(`http://localhost:3000/users/${params.id}`),
      },
    ],
  },
]);

export default routes;
