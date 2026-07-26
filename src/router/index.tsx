import { createBrowserRouter } from 'react-router-dom';
import { Home, About, Contact } from '@/pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
]);
