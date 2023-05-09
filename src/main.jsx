import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import GlobalStyle from "./styles/globalStyles";
import Theme from "./styles/theme";
import { Context } from "./context/Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Context>
        <Theme>
          <GlobalStyle />
          <App />
        </Theme>
      </Context>
    </BrowserRouter>
  </React.StrictMode>
);
