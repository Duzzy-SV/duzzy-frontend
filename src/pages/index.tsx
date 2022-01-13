import type { NextPage } from 'next';
import Head from 'next/head';
import ColorSystem from 'utils/ColorSystem';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Duzzy</title>
        <meta name="description" content="Website for going dutch in SV" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        style={{ backgroundColor: ColorSystem.main }}
        className="flex justify-center w-full items-center h-screen mx-auto"
      >
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-white" />
          <div className="text-center w-full text-6xl text-white font-bold font-ubuntu">
            Duzzy
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
