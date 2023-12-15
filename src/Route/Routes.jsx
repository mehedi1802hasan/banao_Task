import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Pages/Main";
import Home from "../Pages/Home";

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>
    },
  ]);
  export default router;