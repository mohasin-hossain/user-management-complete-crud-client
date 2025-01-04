import { createBrowserRouter } from "react-router-dom";
import AddUser from "../pages/AddUser/AddUser";
import Home from "../pages/Home/Home";
import Root from "../pages/layout/Root";
import UpdateUser from "../pages/UpdateUser/UpdateUser";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://user-management-complete-crud-se-production.up.railway.app/users"),
      },
      {
        path: "/addUser",
        element: <AddUser></AddUser>,
      },
      {
        path: "/updateUser/:id",
        element: <UpdateUser></UpdateUser>,
        loader: ({ params }) => fetch(`https://user-management-complete-crud-se-production.up.railway.app/users/${params.id}`),
      },
    ],
  },
]);

export default routes;
