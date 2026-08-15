import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import WindowSize from "./pages/WindowSizePage";
import Countdown from "./pages/CountdownPage";
import Confetti from "./pages/ConfettiPage";
import { Fetch } from "./pages/FetchPage";
import CopyFeedback from "./pages/CopyFeedbackPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/window-size",
        element: <WindowSize />,
      },
      {
        path: "/countdown",
        element: <Countdown />,
      },
      {
        path: "/confetti",
        element: <Confetti />,
      },
      {
        path: "/fetch",
        element: <Fetch />,
      },
      {
        path: "/copy-feedback",
        element: <CopyFeedback />,
      },
    ],
  },
]);

export default router;
