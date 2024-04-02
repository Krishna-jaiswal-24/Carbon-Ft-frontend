import React from 'react';
import Navbar from "../components/Navbar.jsx";
import background from '../assets/background.jpg'

const Started = () => {
	return (
		<div className="bg-[#2e3918] h-screen">
			<Navbar/>
			<div className="bg-hero-image">
				<img alt="hero" src={background} className="w-6/12 h-screen absolute top-0 z-0"/>
			</div>
			<div>
				<h1 className="text-white font-albert text-4xl px-16 absolute w-[47%] right-0 top-2/4">
					We know calculating carbon isn't easy. Our carbon modeling engine uses machine learning to simplify
					and automate carbon calculations
					for businesses.
				</h1>
			</div>
		</div>
	);
};

export default Started;