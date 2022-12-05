import Button from "../components/button/Button";

function App() {
	return (
		<>
			<Button>Click here</Button>
			<Button className='btn--primary'>Click here</Button>
			<Button className='btn--primary-40'>Click here</Button>
			<Button className='btn--primary-60'>Click here</Button>
			<Button className='btn--primary-80'>Click here</Button>
			<Button className='btn--disabled'>Click here</Button>
		</>
	);
}

export default App;
