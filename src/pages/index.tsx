import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import DuzzyLogo from 'src/components/DuzzyLogo';
import ColorSystem from 'src/utils/ColorSystem';

const Home: NextPage = () => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    router.push('/main');
  };

  return (
    <div>
      <Head>
        <title>Duzzy</title>
        <meta name="description" content="Website for going dutch in SV" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        style={{ backgroundColor: ColorSystem.main }}
        className="flex justify-center w-full items-center h-screen mx-auto cursor-default select-none"
        onClick={handleClick}
      >
        <DuzzyLogo onClick={handleClick} />
      </main>
    </div>
  );
};

export default Home;
