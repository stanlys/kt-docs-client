import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import NotFound from "./pages/404/404";
import Incoming from "./pages/Incoming/Incoming";
import AddLetter from "./pages/Letter/AddLetter/AddLetter";
import Letter from "./pages/Letter/Letter";
import OutputLetter from "./pages/Output/Output";
import Settings from "./pages/Settings/Settings";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Incoming /> },
      { path: "out", element: <OutputLetter /> },
      {
        path: "letter",
        element: <Letter />,
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
