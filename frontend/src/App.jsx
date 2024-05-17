import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import Index from './pages/Index'
import Layout from './pages/Layout'
import Home from './components/Home'
import Projects from './components/Projects'
import Templates from './components/Templates'
import CreateDesign from "./components/CreateDesign";
import Main from "./pages/Main";
function App() {
  const router = createBrowserRouter([
    // {
    //   path: "/",
    //   element: <Index />,
    // },
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path:'/',
          element:<Home />
        },
        {
          path:'/templates',
          element:<Templates />
        },
        {
          path:'/projects',
          element:<Projects />
        }
      ]
    },
    { path : "/design/create",
    element : <CreateDesign />
    },
    { path : "/design/:id/edit",
    element : <Main/>
    }

  ]);
  return  <RouterProvider router={router} />
}

export default App;
