import './Heading.scss';

const Heading = ({ className = '', level = 4, weight = 'regular', children }: IHeadingProps) => {
	className = `heading heading--level-${level} heading--weight-${weight} ${className}`;

	switch (level) {
		case 1:
			return <h1 className={className}>{children}</h1>;

		case 2:
			return <h2 className={className}>{children}</h2>;

		case 3:
			return <h3 className={className}>{children}</h3>;

		default:
			return <h4 className={className}>{children}</h4>;
	}
};

export default Heading;

interface IHeadingProps {
	className?: string;
	level?: 1 | 2 | 3 | 4;
	weight: 'regular' | 'semibold' | 'bold';
	children: React.ReactNode;
}
