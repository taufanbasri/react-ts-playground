import { createBrowserRouter } from "react-router-dom";
import ContactPage from "./ContactPage";
import HomePage from "./HomePage";
import UserDetailPage from "./UserDetailPage";
import UserListPage from "./UserListPage";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index:true, element: <HomePage /> },
      { path: "users", element: <UserListPage /> },
      { path: "users/:id", element: <UserDetailPage /> },
      { path: "contacts", element: <ContactPage /> },
    ],
  },
]);

export default router;
