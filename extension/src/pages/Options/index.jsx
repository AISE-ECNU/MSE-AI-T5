import React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
createRoot(window.document.querySelector("#app-container")).render(<div />);

if (module.hot) module.hot.accept();
