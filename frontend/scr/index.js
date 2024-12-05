import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // Ensure this path is correct based on where your App.js is located
import "./index.css"; // Optional: If you have a global stylesheet or other necessary styles

// Rendering the root component (App) to the DOM
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root") // Make sure the id in your public/index.html matches this
);
