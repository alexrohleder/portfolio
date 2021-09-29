import Head from "next/head";
import { DefaultSeo } from "next-seo";
import seo from "../next-seo.config";
import "tailwindcss/tailwind.css";
import Header from "../components/Header";
import { useRouter } from "next/dist/client/router";

function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <DefaultSeo {...seo} />
      <Head>
        <style>{`html{overflow-y:scroll}`}</style>
        {router.asPath.endsWith("?screenshot") && (
          <style>{`.print\\:hidden{display:none !important}`}</style>
        )}
      </Head>
      <div className="min-h-screen flex flex-col justify-between">
        <main className="container mx-auto px-8 py-24">
          <Header />
          <Component {...pageProps} />
        </main>
        <footer className="py-16 text-center">
          <p>Made with ❤️ by Alex Rohleder</p>
        </footer>
      </div>
    </>
  );
}

export default App;
