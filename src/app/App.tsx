import Button from '../components/button/Button';
import { BsArrowRightCircle } from 'react-icons/bs';

function App() {
	return (
		<>
			<Button>Click here</Button>

			<Button className='btn--primary'>
				Click here <BsArrowRightCircle />
			</Button>
			<Button className='btn--primary-40'>
				<BsArrowRightCircle />
				Click here
			</Button>
			<Button className='btn--primary-60'>Click here</Button>
			<Button className='btn--primary-80'>Click here</Button>
			<Button className='btn--disabled'>Click here</Button>

			<Button className='btn--circle'>
				<BsArrowRightCircle />
			</Button>
			<Button className='btn--circle btn--primary'>
				<BsArrowRightCircle />
			</Button>
			<Button className='btn--circle btn--primary-40'>
				<BsArrowRightCircle />
			</Button>
			<Button className='btn--circle btn--primary-60'>
				<BsArrowRightCircle />
			</Button>
			<Button className='btn--circle btn--primary-80'>
				<BsArrowRightCircle />
			</Button>
			<Button className='btn--circle btn--disabled'>
				<BsArrowRightCircle />
			</Button>
		</>
	);
}

export default App;
