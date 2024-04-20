import React, {useContext, useEffect, useState} from "react";
import background from '../assets/background.jpg';
import Navbar from "../components/Navbar.jsx";
import {TransactionContext} from "../context/TransactionContext.jsx";
import axios from "axios";

const Input = ({placeholder, name, type, value, handleChange}) => (
	<input
		placeholder={placeholder}
		type={type}
		step="100"
		value={value}
		onChange={(e) => handleChange(e, name)}
		className="my-4 w-full rounded-lg p-2 outline-none text-black border-none text-xl white-glassmorphism"
	/>
);

const Started = () => {

	const [emission, setEmission] = useState(0);
	const handleChange = (e) => {
		setEmission(e.target.value);
		console.log(e.target.value);
	}

	const {currentAccount} = useContext(TransactionContext)
	const [companyDetails, setCompanyDetails] = useState({
		name: "",
		walletAddress: currentAccount,
		industry: "",
		website: "",
		id: 0
	})
	useEffect(() => {
		const getCompanyDetails = async () => {

			if (!currentAccount) {
				return;
			}


			try {
				const details = await axios.get(`http://10.0.4.104:8000/apis/companies/details/${currentAccount}/`);
				setCompanyDetails(
					{
						name: details.data.company.name,
						walletAddress: details.data.company.wallet_address,
						industry: details.data.industry_sector.name,
						website: details.data.company.website,
						id: parseInt(details.data.company.id),
					}
				)
				console.log("Company details fetched:", details.data);
			} catch (error) {
				console.error("Failed to fetch industries:", error);
			}
		}

		getCompanyDetails();
	}, [currentAccount]);




	const postEmission = async (e) => {
		e.preventDefault();  // Prevent the default form submission behavior

		console.log({
			company: companyDetails.id,
			emission: parseFloat(emission),
			transactionHash: "0x1234567890"
		});

		try {
			const response = await axios.post('http://10.0.4.104:8000/apis/footprint-reports/', {
				company: companyDetails.id,
				total_emission: parseFloat(emission),  // Ensure this matches the backend expected payload key
				transaction_hash: "0x1234567890"
			});
			console.log('Emission posted successfully:', response.data);
		} catch (error) {
			console.error('Failed to post emission:', error);
		}
	}


	return (
		<div className="bg-[#2e3918] w-screen h-screen">
			<Navbar/>
			<div className="bg-hero-image">
				<img alt="hero" src={background} className="w-6/12 h-screen absolute top-0 z-0"/>
			</div>
			<div
				className="absolute w-1/2 mt-10 right-0">
				<div className="p-5 w-[30rem] flex flex-col justify-start items-center blue-glassmorphism">

					<form onSubmit={postEmission}>

						<h1 className="text-8xl font-semibold text-secondary font-albert mt-16 mb-6">{companyDetails.name}</h1>
						<h2 className="text-xl text-secondary font-albert">{companyDetails.industry}</h2>
						<Input placeholder="Total Emission (CO2e)" name="emission" type="number"
						       handleChange={handleChange}/>
						<button type="submit" className="bg-secondary px-8 w-full py-2 rounded-lg">Submit</button>
					</form>


				</div>
			</div>
		</div>
	);

};

export default Started;