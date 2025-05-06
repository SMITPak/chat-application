import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { ToastComponent } from "./component/sub-component/toast.jsx";
import { AppProvider } from "./config/context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AppProvider>
        <App />
        <ToastComponent />
      </AppProvider>
    </BrowserRouter>
  </StrictMode>
);
