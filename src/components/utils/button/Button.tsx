import './Button.scss';

const Button = ({ className = '', onClick, children }: IButtonProps) => {
	return (
		<>
			<button className={`btn ${className}`} type='button' onClick={onClick}>
				{children}
			</button>
		</>
	);
};

export default Button;

interface IButtonProps {
	className?: string;
	onClick?: () => void;
	children: React.ReactNode;
}
