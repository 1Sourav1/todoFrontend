import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./redux/Store/store";
import { Provider } from "react-redux"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
)