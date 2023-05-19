import React from "react";
import ReactDOM from "react-dom/client";
import {
    RouterProvider,
} from "react-router-dom";
import "./assets/scss/index.scss";
import router from './routes/router'
import { createStore } from "redux";
import { Provider } from "react-redux";
import {CookiesProvider} from "react-cookie";
import rootReducer from './reducers'
const store = createStore(rootReducer)

ReactDOM.createRoot(document.getElementById("root")).render(
    <CookiesProvider>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </CookiesProvider>
);