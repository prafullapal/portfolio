import Head from "next/head";

import Header from "./header";
export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Prafulla Pal | Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div>
        <Header />
        {children}
      </div>
    </>
  );
}
