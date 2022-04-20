import type { AppProps } from "next/app";
import { useEffect } from "react";

import Header from "../components/Header";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <>
         <Header />
         <div id="container">
            <Component {...pageProps} />
         </div>
      </>
   );
}

export default MyApp;
