const Text = ({ type = 'paragraph', weight = 'regular', className = '', children }: ITextProps) => {
	className = `text text--${weight} ${className}`;

	return (
		<>
			{type === 'paragraph' && <p className={className}>{children}</p>}
			{type === 'span' && <span className={className}>{children}</span>}
		</>
	);
};

export default Text;

interface ITextProps {
	type?: 'paragraph' | 'span';
	weight?: 'regular' | 'medium' | 'bold';
	className?: string;
	children: React.ReactNode;
}
