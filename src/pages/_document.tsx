import { Html, Head, Main, NextScript } from "next/document";

export default function _document() {
  return (
    // data-theme is from DaisyUI
    <Html data-theme="winter">
      <Head></Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
