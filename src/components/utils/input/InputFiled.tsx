import { BsEyeSlash } from 'react-icons/bs';

const InputFiled = ({ className, placeholder, label, description, hidden }: InputFiledProps) => {
	className = `text text--input ${className}`;

	return (
		<label>
			{label && <span>{label}</span>}

			<div>
				<input className={className} type='text' placeholder={placeholder} />
				{hidden && <BsEyeSlash />}
			</div>

			{description && <p>{description}</p>}
		</label>
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
