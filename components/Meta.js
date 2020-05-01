import Head from "next/head";

const Meta = () => (
  <Head>
    {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
    ></meta>
    <meta charSet="utf-8" />
    <link rel="shortcut icon" href="/static/ja-logo.png" />
    <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
    <link
      href="https://fonts.googleapis.com/css?family=Montserrat:300,400,400i,600&display=swap"
      rel="stylesheet"
    />
    <title>Jennifer Amy Jewelry</title>
  </Head>
);

export default Meta;
