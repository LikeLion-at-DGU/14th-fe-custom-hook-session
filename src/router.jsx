import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import WindowSize from "./pages/WindowSizePage";
import Countdown from "./pages/CountdownPage";
import Confetti from "./pages/ConfettiPage";
import { Fetch } from "./pages/FetchPage";
import YourOwnHook from "./pages/YourOwnHookPage";

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
        path: "/your-own-hook",
        element: <YourOwnHook />,
      },
    ],
  },
]);

export default router;
