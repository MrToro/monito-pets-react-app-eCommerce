import InputPassword from './InputPassword';
import InputText from './InputText';

const Input = ({ type = 'text', placeholder, className = '' }: IInputProps) => {
	className = `input__container ${className}`;

	return (
		<label className={className}>
			{type === 'text' && <InputText placeholder={placeholder} />}
			{type === 'password' && <InputPassword placeholder={placeholder} />}
		</label>
	);
};

export default Input;

interface IInputProps {
	type: 'text' | 'password';
	placeholder: string;
	className?: string;
}
