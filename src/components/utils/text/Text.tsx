import './Text.scss';

const Text = ({ type = 'paragraph', weight = 'regular', className='', children }: ITextProps) => {
  className = `text text--weight-${weight} ${className}`;

	switch (type) {
		case 'paragraph':
			return <p className={className}>{children}</p>;

		default:
			return <span className={className}>{children}</span>;
	}
};

export default Text

interface ITextProps {
	type?: 'paragraph' | 'span';
	weight?: 'regular' | 'medium' | 'bold';
	className?: string;
	children: React.ReactNode;
}
