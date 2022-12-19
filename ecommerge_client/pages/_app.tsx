
import React from "react";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { store } from "../store/store";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Header from "../component/header";
import Footer from "../component/footer";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <div className="min-w-[1400px]">
        <Header />
        <Component {...pageProps} />
        <Footer />
        </div>
      </ChakraProvider>
    </Provider>
  );
}
