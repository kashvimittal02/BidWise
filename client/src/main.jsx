import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AuthProvider } from "./context/AuthContext"; // 👈 import this

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>               {/* 👈 Wrap the whole app in AuthProvider */}
        <App />
    </AuthProvider>
  </React.StrictMode>
);
