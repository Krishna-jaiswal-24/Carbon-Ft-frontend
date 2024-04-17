//import {Link} from "react-router-dom";
//import {useState} from "react";
const Navbar = () => {

	return (
		<nav className="flex justify-between p-10 text-white  font-albert cursor-pointer items-center z-10">
			<div className="text-2xl font-light z-10">
				RE-STORE
			</div>
			<div>
				<ul className="flex items-center">
					<li className="px-4">How it works</li>
					<li className="px-4">Solutions</li>
					<li className="px-4">Technology</li>
					<li className="px-4">Resources</li>
					<li className="px-4">Get started</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;