import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Incoming from "./pages/Incoming/Incoming";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Incoming /> },
      { path: "out", element: <div> output letter </div> },
      { path: "paperin", element: <div> paper letter </div> },
    ],
  },
]);
