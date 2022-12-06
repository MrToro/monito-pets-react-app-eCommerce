import './Heading.scss';

const Heading = ({ className, level, children }: IHeadingProps) => {
  switch (level) {
    case 1:
      return <h1 className={className}>{children}</h1>;

    case 2:
      return <h2 className={className}>{children}</h2>;

    case 3:
      return <h3 className={className}>{children}</h3>;

    case 4:
      return <h4 className={className}>{children}</h4>;

    case 5:
      return <h5 className={className}>{children}</h5>;

    default:
      return <h6 className={className}>{children}</h6>;
  }
};

export default Heading

interface IHeadingProps {
  className?: '' | string;
  level: 1 | 2 | 3 | 4 | 5;
  children: React.ReactNode;
}
