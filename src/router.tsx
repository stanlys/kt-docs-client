import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import NotFound from "./pages/404/404";
import Incoming from "./pages/Incoming/Incoming";
import AddLetter from "./pages/PostLetter/AddLetter/AddLetter";
import PostLetter from "./pages/PostLetter/PostLetter";
import Settings from "./pages/Settings/Settings";
import Outgoing from "./pages/Outgoing/Outgoing";
import AddDelivery from "./pages/Settings/Delivery/Add/AddOrganization";
import ListDelivery from "./pages/Settings/Delivery/List/ListDelivery";
import AddOutLetter from "./pages/Outgoing/AddLetter/AddOutLetter";

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
        path: "addin",
        element: <AddOutLetter />,
      },
      {
        path: "setting",
        element: <Settings />,
        children: [
          { path: "address", element: <div>Добавление адреса</div> },
          { path: "delivery", element: <ListDelivery /> },
          { path: "additional", element: <div>Дополнительные настройки</div> },
        ],
      },
    ],
  },
]);
