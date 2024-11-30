import { createBrowserRouter } from "react-router-dom";
import AddCoffee from "../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";
import MainLayout from "../layouts/MainLayout/MainLayout";
import HomePage from "../pages/HomePage";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import Users from "../components/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
        loader: () =>
          fetch("https://coffee-store-server-ten-ashen.vercel.app/coffee"),
      },
      {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) =>
          fetch(
            `https://coffee-store-server-ten-ashen.vercel.app/coffee/${params.id}`
          ),
      },
      {
        path: "/users",
        element: <Users></Users>,
        loader: () =>
          fetch("https://coffee-store-server-ten-ashen.vercel.app/users"),
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
