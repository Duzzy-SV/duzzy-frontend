interface KakaoLoginButtonProps {
  className?: string;
}

const GoogleLoginButton = ({ className = '' }: KakaoLoginButtonProps) => {
  return (
    <div
      className={`flex justify-center w-full border rounded-lg py-4 px-4 bg-white cursor-pointer ${className}`}
      style={{ borderColor: '#CCCCCC' }}
    >
      <img src="/google-social-login-icon.svg" />
      <span className="ml-2">Continue with Google</span>
    </div>
  );
};

export default GoogleLoginButton;
