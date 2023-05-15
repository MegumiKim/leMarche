import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Context } from "./context/Context.jsx";
import Theme from "./styles/theme";
import GlobalStyle from "./styles/globalStyles";
import App from "./App.jsx";

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
