import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div> Hello World!</div>,
  },
  { path: "in", element: <div> input letter </div> },
  { path: "out", element: <div> output letter </div> },
  { path: "paperin", element: <div> paper letter </div> },
]);
