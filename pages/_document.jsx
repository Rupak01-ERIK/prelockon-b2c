import Document, { Html, Head, Main, NextScript } from "next/document";

import React from "react";

function MyDocument() {
  return (
    <>
      <Html>
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          {/* Add your favicon */}
          <link rel="icon" href="/favicon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    </>
  );
}

export default MyDocument;
