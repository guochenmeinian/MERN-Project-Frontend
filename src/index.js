import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux"; // here also needs to install redux, only installing react-redux produces error
import store from "./redux/store";

/**
 * redudx tutorial: https://www.youtube.com/watch?v=DYtYyFOfpBY
 * auto format (windows prettier): shift + alt + f
 */
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
