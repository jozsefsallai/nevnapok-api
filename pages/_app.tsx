import '../styles/base.scss';

import { AppProps } from 'next/app';
import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Névnapok API</title>
        <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no" />
        <meta name="title" content="Névnapok API" />
        <meta name="description" content="Ingyenes névnap API fejlesztőknek." />

        <meta property="og:title" content="Névnapok API" />
        <meta property="og:description" content="Ingyenes névnap API fejlesztőknek." />
        <meta property="og:site_name" content="Névnapok API" />
        <meta property="og:url" content="https://nevnapok.vercel.app" />
        <meta content="website" property="og:type" />
      </Head>

      <main>
        <section className="page">
          <Component {...pageProps} />
          <footer>
            <hr />
            A Névnapok API egy nyílt forráskódú projekt, melyet <a href="https://github.com/jozsefsallai"
              target="_blank" rel="noopener noreferrer">@jozsefsallai</a> készített.
            A forráskódot megtalálhatod <a href="https://github.com/jozsefsallai/nevnapok-api"
              target="_blank" rel="noopener noreferrer">GitHub</a>-on.
          </footer>
        </section>
      </main>
    </>
  );
};

export default App;
