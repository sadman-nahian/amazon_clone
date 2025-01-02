import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {BasketProvider} from "./components/BasketContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BasketProvider>
      <App />
    </BasketProvider>
  </StrictMode>
);
