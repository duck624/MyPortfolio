import Head from "next/head";
import { AppProps } from "next/app";
import { useEffect } from "react";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>My Portfolio</title>
        {/* Các thẻ meta khác nếu có */}
      </Head>
      {/* Google Analytics scripts đặt ngoài Head */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-912QM9EFWV"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-912QM9EFWV');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
