const InputText = ({ placeholder }: IInputTextProps) => {
	return (
		<>
			<input type='text' placeholder={placeholder} />
		</>
	);
};

export default InputText;

interface IInputTextProps {
  placeholder: string;
}