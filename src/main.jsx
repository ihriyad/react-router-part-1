import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./Components/Root/Root.jsx";
import Home from "./Components/Home/Home.jsx";
import Mobiles from "./Components/Mobiles/Mobiles.jsx";
import Laptops from "./Components/Laptops/Laptops.jsx";
import Users from "./Components/Users/Users.jsx";
import Users2 from "./Components/Users2/Users2.jsx";
import UserDetails from "./Components/UserDetails/UserDetails.jsx";
import Posts from "./Components/Posts/Posts.jsx";
import PostDetails from "./Components/PostDetails/PostDetails.jsx";

const userPromise = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json(),
);
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "mobiles", Component: Mobiles },
      { path: "laptops", Component: Laptops },
      {
        path: "users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users,
      },
      {
        path: "users2",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Users2 userPromise={userPromise}></Users2>
          </Suspense>
        ),
      },
      {
        path: "users/:userID",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userID}`),
        Component: UserDetails,
      },
      {
        path: "posts",
        Component: Posts,
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
      },
      {
        path: "posts/:userId",
        Component: PostDetails,
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.userId}`),
      },
      {
        path: "*",
        element: <span>404 not found</span>,
      },
    ],
  },
  {
    path: "home",
    element: <App></App>,
  },
  {
    path: "home.page",
    Component: App,
  },
  {
    path: "*",
    element: <span>sorry not found</span>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
