import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";

// import App from "./Greets";
// import App from "./Timer";
// import App from "./SingleApp";
import App from "./LearnReactMemo";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
