import React, { useContext } from "react";
import background from '../assets/background.jpg';
import Loader from '../components/Loader.jsx';
import Navbar from "../components/Navbar.jsx";
import { TransactionContext } from "../context/TransactionContext.jsx";

const Input = ({ placeholder, name, type, value, handleChange }) => (
	<input
		placeholder={placeholder}
		type={type}
		step="0.0001"
		value={value}
		onChange={(e) => handleChange(e, name)}
		className="my-4 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-xl white-glassmorphism"
	/>
);

const Started = () => {
	const { currentAccount, formData, registerEmission, handleChange } = useContext(TransactionContext)
	console.log("Start: " + currentAccount)
	const handleSubmit = (e) => {
		const { emission } = formData;

		e.preventDefault();

		if (!emission) return;

		registerEmission(emission);
	};
	return (
		<div className="bg-[#2e3918] h-screen">
			<Navbar />
			<div className="bg-hero-image">
				<img alt="hero" src={background} className="w-6/12 h-screen absolute top-0 z-0" />
			</div>

			<div className="flex flex-col items-end justify-start w-full mf:mt-0 mt-10 relative right-[20rem] top-[20rem]">
				<div className="p-5 w-[30rem] flex flex-col justify-start items-center blue-glassmorphism">
					<Input placeholder="Total Emission (CO2e)" name="emission" type="number" handleChange={handleChange} />

					<div className="h-[1px] w-full bg-gray-400 my-2" />

					{false
						? <Loader />
						: (
							<button
								type="button"
								onClick={handleSubmit}
								className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
							>
								Send now
							</button>
						)}
				</div>
			</div>
		</div>

	);
};

export default Started;