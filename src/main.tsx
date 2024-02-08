import React from "react";
import ReactDOM from "react-dom/client";
import "@/styles/index.css";
import App from "./routes/route";
import "leaflet/dist/leaflet.css";
import { Toaster } from "./components/ui/toaster";
import { AuthProvider } from "./utils/context/auth";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
      <Toaster />
    </AuthProvider>
  </React.StrictMode>
);
