import { createBrowserRouter } from "react-router-dom";
import AddCoffee from "../components/AddCoffee";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import UpdateCoffee from "../components/UpdateCoffee";
import Users from "../components/Users";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import MainLayout from "../layouts/MainLayout/MainLayout";
import HomePage from "../pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
        loader: () => fetch("http://localhost:5000/coffee"),
      },
      {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffee/${params.id}`),
      },
      {
        path: "/users",
        element: <Users></Users>,
        loader: () => fetch("http://localhost:5000/users"),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/auth/signIn",
        element: <SignIn></SignIn>,
      },
    ],
  },
]);

export default router;
