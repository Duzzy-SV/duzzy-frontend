import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import DuzzyLogo from 'src/components/DuzzyLogo';

import EmailField from 'src/components/EmailField';
import GoogleLoginButton from 'src/components/GoogleLoginButton';
import KakaoLoginButton from 'src/components/KakaoLoginButton';
import PasswordField from 'src/components/PasswordField';
import ColorSystem from 'src/utils/ColorSystem';

const Login: NextPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    },
    [email],
  );

  const onChangePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    [password],
  );

  const LoginTitle = () => {
    return (
      <div
        className="text-2xl font-bold pb-8"
        style={{ color: ColorSystem.main }}
      >
        로그인
      </div>
    );
  };

  const OrDivider = () => {
    return (
      <div className={`flex w-full items-center space-x-2`}>
        <span className="w-full h-px bg-black" />
        <span>OR</span>
        <span className="w-full h-px bg-black" />
      </div>
    );
  };

  const LoginButton = ({
    className = '',
    onClick,
  }: {
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  }) => {
    return (
      <div
        className={`w-full border border-black rounded-lg py-2 px-8 text-center font-bold cursor-pointer ${className}`}
        style={{
          backgroundColor: ColorSystem.main,
          color: 'white',
          borderColor: '#CCCCCC',
        }}
        onClick={onClick}
      >
        로그인
      </div>
    );
  };

  const FindUsernameAndPasswordButtons = ({
    className = '',
  }: {
    className?: string;
  }) => {
    const onClickFindUsername = useCallback(() => {
      router.push('/find-username');
    }, [router]);

    const onClickFindPassword = useCallback(() => {
      router.push('/find-password');
    }, [router]);

    return (
      <div className={`space-x-1 ${className}`}>
        <span className="cursor-pointer" onClick={onClickFindUsername}>
          아이디
        </span>
        <span>/</span>
        <span className="cursor-pointer" onClick={onClickFindPassword}>
          비밀번호 찾기
        </span>
      </div>
    );
  };

  const RegisterButton = ({ className = '' }: { className?: string }) => {
    const onClick = useCallback(() => {
      router.push('/register');
    }, [router]);

    return (
      <span
        className={`font-bold cursor-pointer ${className}`}
        style={{ color: ColorSystem.main }}
        onClick={onClick}
      >
        회원가입
      </span>
    );
  };

  return (
    <div>
      <Head>
        <title>Duzzy</title>
        <meta name="description" content="Website for going dutch in SV" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        style={{ backgroundColor: 'white' }}
        className="flex justify-center w-full items-center h-screen select-none"
      >
        <div className="flex flex-col items-center space-y-4 mx-5 w-full md:w-96">
          <div className="flex">
            <DuzzyLogo logoColor={ColorSystem.main} />
          </div>
          <LoginTitle />
          <KakaoLoginButton />
          <GoogleLoginButton />
          <OrDivider />
          <EmailField onChange={onChangeEmail} value={email} />
          <PasswordField onChange={onChangePassword} value={password} />
          <LoginButton />
          <FindUsernameAndPasswordButtons />
          <div className="space-x-1">
            <span className="text-black">더찌 회원이 아니신가요?</span>
            <RegisterButton />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
