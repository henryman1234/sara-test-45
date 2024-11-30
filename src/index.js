import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';
import Login from './pages/Login';
import Logout from './pages/Logout';
import AuthorPosts from './pages/AuthorPosts';
import Register from './pages/Register';
import PostDetail from './pages/PostDetail';
import EditPost from './pages/EditPost';
import DeletePost from './pages/DeletePost';
import Authors from './pages/Authors';
import CreatePosts from './pages/CreatePosts';
import Dashboard from './pages/Dashboard';
import UserProfile from './pages/UserProfile';
import CategoryPosts from './pages/CategoryPosts';
import Layout from './components/Layout';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
      {index: true, element: <Home/>},
      {path: "login", element: <Login/>},
      {path: "logout", element: <Logout/>},
      {path: "posts/users/:id", element: <AuthorPosts/>},
      {path: "register", element: <Register/>},
      {path: "posts/:id", element: <PostDetail/>},
      {path: "posts/:id/edit", element: <EditPost/>},
      {path: "posts/:id/delete", element: <DeletePost/>},
      {path: "authors", element: <Authors/>},
      {path: "create", element: <CreatePosts/>},
      {path: "myposts/:id", element: <Dashboard/>},
      {path: "posts/categories/:category", element: <CategoryPosts/>},
      {path: "profile/:id", element: <UserProfile/>}
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
