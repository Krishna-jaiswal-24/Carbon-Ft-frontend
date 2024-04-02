import React,{useState} from 'react';
import {ethers} from "ethers";
const provider = new ethers.BrowserProvider(window.Ethereum)
const ConnectButton =   () => {
	const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [userBalance, setUserBalance] = useState(null);
	const connectwalletHandler = () => {
		if (window.Ethereum) {
			provider.send("eth_requestAccounts", []).then(async () => {
				await accountChangedHandler(provider.getSigner());
			})
		} else {
			setErrorMessage("Please Install Metamask!!!");
		}
	}
	const accountChangedHandler = async (newAccount) => {
		const address = await newAccount.getAddress();
		setDefaultAccount(address);
		const balance = await newAccount.getBalance()
		setUserBalance(ethers.formatEther(balance));
		await getuserBalance(address)
	}
	const getuserBalance = async (address) => {
		const balance = await provider.getBalance(address, "latest")
	}

	return (
			<div className="px-6 border-2 rounded-3xl py-2 hover:bg-[#FAF9F6] hover:border-[#798068] hover:text-[#798068] text-center" onClick={connectwalletHandler}>
					Connect Wallet
			</div>
)
	;
};

export default ConnectButton;