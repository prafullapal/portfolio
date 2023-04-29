import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="text-slate-900 dark:text-primary dark:bg-primary">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
