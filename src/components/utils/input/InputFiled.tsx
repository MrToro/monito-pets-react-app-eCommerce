import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';

import './InputField.scss';

const InputFiled = ({ className = '', placeholder, label, description, hidden }: InputFiledProps) => {
	className = `inputField ${className}`;

	return (
		<input className={className} type='text' placeholder={placeholder} />
	);
};

export default InputFiled;

interface InputFiledProps {
	className?: string;
	placeholder: string;
	label?: string;
	description?: string;
	hidden?: boolean;
}
