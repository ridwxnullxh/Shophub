import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./router";
import { DarkModeProvider } from "./contexts/DarkModeContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DarkModeProvider>
      <AppRouter />
    </DarkModeProvider>
  </StrictMode>
);
