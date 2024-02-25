import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="overflow-x-hidden bg-white text-black antialiased transition-colors dark:bg-gray-900 dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
