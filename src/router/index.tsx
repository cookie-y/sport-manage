import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/pages/Layout';
import Login from '@/pages/Login';
import race from './race';
import user from './user';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <Layout />,
    children: [...race, ...user],
  },
]);

export default router;
