import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import Home from './pages/Home/Home.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App es el padre
    children: [
      {
        index: true,    // Esto renderiza Home en la ruta raíz "/"
        element: <Home />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Solo dejamos el RouterProvider. Él ya sabe que debe mostrar <App /> */}
    <RouterProvider router={router} />
  </StrictMode>
)
