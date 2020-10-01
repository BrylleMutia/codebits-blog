import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/index";
import theme from "./theme/theme";
import { MuiThemeProvider } from "@material-ui/core/styles";

const render = () => {
    ReactDOM.render(
        <MuiThemeProvider theme={theme}>
            <Provider store={store}>
                <App />
            </Provider>
        </MuiThemeProvider>,
        document.getElementById("root")
    );
};

render();
store.subscribe(render);
