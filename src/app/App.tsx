import Button from "../components/utils/button/Button";
import { AiOutlineHome } from 'react-icons/ai';

const App = () => {
	return (
		<>
			<Button>Click here</Button>
			<Button className='btn--primary'>Click here</Button>
			<Button className='btn--primary-80'>
				<AiOutlineHome />
				Click here
			</Button>
			<Button className='btn--primary-60'>Click here</Button>
			<Button className='btn--primary-40'>Click here</Button>
			<Button className='btn--disabled'>Click here</Button>
			<Button className='btn--circle'>
				<AiOutlineHome />
			</Button>
		</>
	);
};

export default App;
