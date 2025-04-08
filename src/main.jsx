import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { MyProvider } from "./context/Context";

createRoot(document.getElementById("root")).render(
  <MyProvider>
    <App />
  </MyProvider>
);
