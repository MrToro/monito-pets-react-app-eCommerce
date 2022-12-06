import Button from '../components/button/Button';
import { BsArrowRightCircle } from 'react-icons/bs';
import Heading from '../components/heading/Heading';

function App() {
	return (
		<>
			<Heading level={1} weight='bold'>Hello</Heading>
			<Heading level={2} weight='semibold'>Hello</Heading>
			<Heading level={3} weight='regular'>Hello</Heading>
			<Heading level={4} weight='regular'>Hello</Heading>
		</>
	);
}

export default App;
