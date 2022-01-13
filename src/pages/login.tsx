import type { NextPage } from 'next';
import Head from 'next/head';

const Login: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Duzzy</title>
        <meta name="description" content="Website for going dutch in SV" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="w-full h-full mx-5 border-2">Continue with Google</div>
        <div className="w-full h-full mx-5 border-2">Continue with Kakao</div>
        <div className="w-full h-full mx-5 border-2 bg-black" />
        <div className="w-full h-full mx-5 border-2">Login</div>
      </main>
    </div>
  );
};

export default Login;
