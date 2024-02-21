import { HeroesApp } from "../HeroesApp";
import { MarvelPage, DCPage, SearchPage, HeroPage } from "../heroes";
import { LoginPage, NotFoundPage } from "../auth";

import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/marvel" />,
    errorElement: <NotFoundPage />
  },
  {
    path:"/",
    element: <HeroesApp />,
    children: [
      {
        path: "/marvel",
        element: <MarvelPage />
      },
      {
        path: "/dc",
        element: <DCPage />
      },
      {
        path: "/search",
        element: <SearchPage />
      },
      {
        path: "/hero/:heroId",
        element: <HeroPage />
      }
    ]
  },
  {
    path: "/login",
    element: <LoginPage />
  }
]);

export const Router = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )

}