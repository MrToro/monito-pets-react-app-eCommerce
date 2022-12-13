const Heading = ({ level = 4, weight = 'regular', className = '', children }: IHeadingProps) => {
	className = `heading heading--${weight} heading--level-${level} ${className}`;

	return (
		<>
			{level === 1 && <h1 className={className}>{children}</h1>}
			{level === 2 && <h2 className={className}>{children}</h2>}
			{level === 3 && <h3 className={className}>{children}</h3>}
			{level === 4 && <h4 className={className}>{children}</h4>}
		</>
	);
};

export default Heading;

interface IHeadingProps {
	level?: 1 | 2 | 3 | 4;
	weight?: 'regular' | 'medium' | 'bold';
	className?: string;
	children: React.ReactNode;
}
