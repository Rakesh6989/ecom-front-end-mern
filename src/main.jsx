import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Darksetter } from "./Context/DarkModeContext.jsx";
import { CartProvider } from "./Context/cartContext.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <CartProvider>
        <Darksetter>
          <App />
        </Darksetter>
      </CartProvider>
    </StrictMode>
  </BrowserRouter>
);
