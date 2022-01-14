interface EmailFieldProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const EmailField = ({ onChange, value }: EmailFieldProps) => {
  return (
    <div
      className="w-full border rounded-lg border-black p-2"
      style={{ borderColor: '#CCCCCC', backgroundColor: '#EEEEEE' }}
    >
      <input
        className="w-full"
        style={{ backgroundColor: '#EEEEEE' }}
        placeholder="Email"
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default EmailField;
