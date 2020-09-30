import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";

const middleware = [thunk];

// const store = createStore(
//     rootReducer,
//     // applyMiddleware(...middleware)
//     compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// );

// export default store;

// const initialState = {};

const store = createStore(
    rootReducer,
    // applyMiddleware(...middleware)
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

// const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

// export const wrapper = createWrapper(makeStore, { debug: true });
