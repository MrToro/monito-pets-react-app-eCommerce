import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const InputPassword = ({ placeholder }: IInputPasswordProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword(!showPassword);

	return (
		<>
			<input type='password' placeholder={placeholder} hidden={!showPassword} />

			<button onClick={toggleShowPassword}>
        {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
      </button>
		</>
	);
};

export default InputPassword


interface IInputPasswordProps {
	placeholder: string;
}