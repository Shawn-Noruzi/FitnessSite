import React, { useState, useEffect } from "react";
import Head from 'next/head';
import { AnimatePresence } from "framer-motion";
import Layout from "../components/Layout";
import "../styles/index.css";
import "react-image-gallery/styles/css/image-gallery.css";
import "react-multi-carousel/lib/styles.css";
function MyApp({ Component, pageProps, router }) {
  const [isFirstMount, setIsFirstMount] = useState(true);

  useEffect(() => {
    const handleRouteChange = () => {
      isFirstMount && setIsFirstMount(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <Layout>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <AnimatePresence exitBeforeEnter>
        <Component
          isFirstMount={isFirstMount}
          key={router.route}
          {...pageProps}
        />
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
