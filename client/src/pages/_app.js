import "./global/global.css";
import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import makeStore from '../store/index';

// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps, store, ...rest }) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}


export default withRedux(makeStore)(MyApp);