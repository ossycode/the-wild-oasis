import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import isPropValid from "@emotion/is-prop-valid";
import { StyleSheetManager } from "styled-components";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  //   <StyleSheetManager
  //     shouldForwardProp={isPropValid}
  //     disableVendorPrefixes={false}
  //   ></StyleSheetManager>
  //   <App />
  // </React.StrictMode>

  <React.StrictMode>
    <StyleSheetManager
      shouldForwardProp={isPropValid}
      disableVendorPrefixes={false}
    >
      <App />
    </StyleSheetManager>
  </React.StrictMode>
);
