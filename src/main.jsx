import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

// Icon
import "remixicon/fonts/remixicon.css";
import StoreContextProvider from "./context/StoreContext.jsx";
import ScrollToTopComponents from "./components/ScrollToTop/ScrollToTopComponents.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreContextProvider>
        <ScrollToTopComponents />
        <App />
      </StoreContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
