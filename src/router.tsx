import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import NotFound from "./pages/404/404";
import Outgoing from "./pages/Outgoing/Outgoing";
import AddLetter from "./pages/PostLetter/AddLetter/AddLetter";
import PostLetter from "./pages/PostLetter/PostLetter";
import Incoming from "./pages/Incoming/Incoming";
import Settings from "./pages/Settings/Settings";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Outgoing /> },
      { path: "out", element: <Incoming /> },
      {
        path: "letter",
        element: <PostLetter />,
      },
      {
        path: "contract",
        element: <PostLetter />,
      },
      {
        path: "addletter",
        element: <AddLetter />,
      },
      {
        path: "setting",
        element: <Settings />,
        children: [
          { path: "address", element: <div>Добавление адреса</div> },
          { path: "currier", element: <div>Добавление доставщиков</div> },
          { path: "additional", element: <div>Дополнительные настройки</div> },
        ],
      },
    ],
  },
]);
