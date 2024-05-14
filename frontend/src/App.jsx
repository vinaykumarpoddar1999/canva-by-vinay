import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from './pages/Index'
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
    },
  ]);
  return  <RouterProvider router={router} />
}

export default App;
