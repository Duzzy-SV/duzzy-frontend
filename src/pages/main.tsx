import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { MouseEvent } from 'react';

import ColorSystem from 'src/utils/ColorSystem';

const Main: NextPage = () => {
  const router = useRouter();

  const handleClickLogin = (e: MouseEvent<HTMLElement>) => {
    router.push('/login');
  };

  const handleClickRegister = (e: MouseEvent<HTMLElement>) => {
    router.push('/register');
  };

  return (
    <div>
      <Head>
        <title>Duzzy - Main</title>
        <meta name="description" content="Website for going dutch in SV" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        style={{ backgroundColor: ColorSystem.main }}
        className="flex justify-center w-full items-center h-screen mx-auto select-none"
      >
        <div className="flex flex-col space-y-4">
          <div
            className="text-center w-full text-3xl border-2 py-2 px-8 rounded-lg text-white font-bold font-ubuntu cursor-pointer"
            onClick={handleClickLogin}
          >
            Login
          </div>
          <div
            className="text-center w-full text-3xl border-2 py-2 px-8 rounded-lg text-white font-bold font-ubuntu cursor-pointer"
            onClick={handleClickRegister}
          >
            Register
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
