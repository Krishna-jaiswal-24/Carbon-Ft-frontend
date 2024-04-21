import React, { useContext, useEffect, useState } from 'react';
import { TransactionContext } from "../context/TransactionContext.jsx";
import axios from "axios";

const CompanyDetailsCard = () => {
	const [companyDetails, setCompanyDetails] = useState({
		name: "",
		walletAddress: "",
		industry: "",
		website: ""
	});

	const { currentAccount } = useContext(TransactionContext);

	useEffect(() => {
		const fetchCompany = async () => {
			try {
				const { data } = await axios.get(`http://10.0.4.104:8000/apis/companies/details/${currentAccount}`);
				console.log(data);  // It's good to log data for debugging, can be removed in production
				const { company, industry_sector } = data;
				setCompanyDetails({
					name: company.name,
					walletAddress: company.wallet_address,
					industry: industry_sector.name,
					website: company.website
				});
			} catch (error) {
				console.error("Failed to fetch company details:", error);
			}
		};

		if (currentAccount) {
			fetchCompany();
		}
	}, [currentAccount]);  // Make sure to include currentAccount in the dependency array

	return (
		<div className="bg-primary w-4/12 font-albert flex flex-col justify-center p-8 rounded-lg h-[35rem]">
			<h1 className="text-secondary text-6xl">{companyDetails.name}</h1>
			<a href={companyDetails.website.startsWith('http') ? companyDetails.website : `http://${companyDetails.website}`}
			   target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-700 mt-2 text-xl">
				{companyDetails.website}
			</a>
			<p className="text-white text-3xl mt-2 w-full overflow-x-auto whitespace-nowrap">{companyDetails.walletAddress}</p>
			<p className="text-white text-3xl mt-2">{companyDetails.industry}</p>
		</div>
	);
};

export default CompanyDetailsCard;
