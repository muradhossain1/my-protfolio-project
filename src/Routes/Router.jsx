import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home";
import Details from "../Pages/Details";

  const Router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      children : [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/details/:id',
            element: <Details></Details>,
            loader: async ({ params }) => {
              const result = await fetch('/projects.json');
              const data = await result.json();
              const singleData = data.find(project => project.id == params.id);
              return singleData;
          }
        }
      ]
    },
  ]);

export default Router