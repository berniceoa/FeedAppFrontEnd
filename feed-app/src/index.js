import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import AppContextProvider from "./context/applicationContext";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <AppContextProvider>
        <Router>
            <App />
        </Router>
        <Toaster />
    </AppContextProvider>
);

reportWebVitals();