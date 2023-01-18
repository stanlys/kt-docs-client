import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import NotFound from "./pages/404/404";
import Incoming from "./pages/Incoming/Incoming";
import OutputLetter from "./pages/Output/Output";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Incoming /> },
      { path: "out", element: <OutputLetter /> },
      { path: "paper-in", element: <div> paper letter </div> },
    ],
  },
]);
