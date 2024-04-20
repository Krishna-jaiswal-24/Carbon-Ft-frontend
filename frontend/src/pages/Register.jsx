import React from 'react';
import Navbar from "../components/Navbar.jsx";
import background from "../assets/background.jpg";
import Loader from "../components/Loader.jsx";

const Register = () => {
	return (
		<div className="bg-[#2e3918] h-screen">
			<div className="bg-hero-image flex">
				<img alt="hero" src={background} className="w-6/12 h-screen"/>
				<div>
					<form className="w-full">
						<div className="flex flex-col  w-full ml-16  mt-80 ">
							<label className="font-semibold text-lg text-gray-100">Company Name</label>
							<input type="text"
							       className="mt-4 w-full rounded-sm px-4 py-2 outline-none bg-transparent text-white border border-gray-600 text-xl white-glassmorphism"/>

							<label className="font-semibold text-lg text-gray-100 mt-6">Company Website</label>
							<input type="text"
							       className="mt-4 w-full rounded-sm px-4 py-2 outline-none bg-transparent text-white border border-gray-600 text-xl white-glassmorphism"/>

							<label className="font-semibold text-lg text-gray-100 mt-6">Company Industry</label>
							<input type="text"
							       className="mt-4 w-full rounded-sm px-4 py-2 outline-none bg-transparent text-white border border-gray-600 text-xl white-glassmorphism"/>

							<button type="submit"
							        className="mt-6 w-full rounded-full border border-blue-800 bg-transparent py-2 text-white hover:bg-secondary hover:text- transition duration-300 ease-in-out cursor-pointer">
								Register
							</button>
						</div>

					</form>
				</div>

			</div>


		</div>
	);
};

export default Register;