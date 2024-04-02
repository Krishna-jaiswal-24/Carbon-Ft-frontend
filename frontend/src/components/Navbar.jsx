import {Link} from "react-router-dom";
import connectToMetaMask from "../utils/connection.js";
import {useState} from "react";
import ConnectButton from "./ConnectButton.jsx";
const Navbar = () => {
	const [walletConnected, setWalletConnected] = useState(false);

	const handleConnectWallet = async () => {
		try {
			const connectedAccount = await connectToMetaMask();
			console.log('Connected account:', connectedAccount);
			setWalletConnected(true);
		} catch (error) {
			console.error('Error connecting to MetaMask:', error.message);
		}
	};


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
					<li> <ConnectButton /> </li>

				</ul>
			</div>
		</nav>
	);
};

export default Navbar;