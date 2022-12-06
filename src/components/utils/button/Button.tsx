import './Button.scss';

const Button = ({ className, children }: IButtonProps) => {
	return (
		<>
			<button className={`btn ${className}`} type='button'>
				{children}
			</button>
		</>
	);
};

export default Button


interface IButtonProps {
	className?: '' | string;
	children: React.ReactNode;
}
