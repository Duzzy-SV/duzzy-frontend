import ColorSystem from 'src/utils/ColorSystem';

interface GoogleLoginButtonProps {
  className?: string;
}

const KakaoLoginButton = ({ className = '' }: GoogleLoginButtonProps) => {
  return (
    <div
      className={`flex justify-center w-full border rounded-lg py-4 px-4 cursor-pointer ${className}`}
      style={{
        borderColor: '#CCCCCC',
        backgroundColor: ColorSystem.kakao,
      }}
    >
      <img src="/kakao-social-login-icon.svg" />
      <span className="ml-2">Continue with Kakao</span>
    </div>
  );
};

export default KakaoLoginButton;
