import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import Index from './pages/Index'
import Layout from './pages/Layout'
function App() {
  const router = createBrowserRouter([
    // {
    //   path: "/",
    //   element: <Index />,
    // },
    {
      path: "/",
      element: <Layout />,
    },
  ]);
  return  <RouterProvider router={router} />
}

export default App;
