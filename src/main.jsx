import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Blog from './pages/blog.jsx';
import Contact from './pages/contact.jsx';
import ThePost from './pages/the-post.jsx';
import NotFound from './pages/notfound.jsx';
import Layout from './components/layout/layout.jsx';
import Authors from './pages/authors-page.jsx';
import About from './pages/about.jsx';
import { AuthContextProvider } from './context/auth-context.jsx';
import LoginForm from './pages/loginform.jsx';
import Registerform from './pages/registerform.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: 'blog',
        element: <Blog />,
      },
      {
        path: 'blog/:slug',
        element: <ThePost />,
      },
      {
        path: 'authors/:authors',
        element: <Authors />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
  {
    path: 'login',
    element: <LoginForm />,
  },
  {
    path: 'register',
    element: <Registerform />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>
);
