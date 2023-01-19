import Document, { Html, Head, body, Main, NextScript } from 'next/document';
import React from 'react';


export default class MyApp extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
