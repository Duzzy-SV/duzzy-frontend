interface PasswordFieldProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const PasswordField = ({ onChange, value }: PasswordFieldProps) => {
  return (
    <div
      className="w-full border rounded-lg border-black p-2"
      style={{ backgroundColor: '#EEEEEE', borderColor: '#CCCCCC' }}
    >
      <input
        className="w-full"
        style={{ backgroundColor: '#EEEEEE' }}
        type="password"
        placeholder="Password"
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default PasswordField;
