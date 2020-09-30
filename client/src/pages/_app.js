import React from "react";
import App, { AppInitialProps, AppContext } from "next/app";
import { wrapper } from "../store/index";
import { getPosts } from "../actions/postsActions";

class WrappedApp extends App {
    static getInitialProps = async ({ Component, ctx }) => {
        ctx.store.dispatch(getPosts(1));

        return {
            pageProps: {
                ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
                appProp: ctx.pathname,
            },
        };
    };

    render() {
        const { Component, pageProps } = this.props;

        return <Component {...pageProps} />;
    }
}

export default wrapper.withRedux(WrappedApp);
