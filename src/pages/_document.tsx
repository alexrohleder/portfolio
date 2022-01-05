import NextDocument, { Html, Head, Main, NextScript } from "next/document";

class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* we need to include this way because 'media="print"' attribute. */}
          {/* eslint-disable-next-line @next/next/no-css-tags */}
          <link
            rel="stylesheet"
            type="text/css"
            media="print"
            href="/styles/print.css"
          />
        </Head>
        <body className="bg-gray-50 print:bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-300">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
