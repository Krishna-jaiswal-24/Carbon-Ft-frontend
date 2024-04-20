import React, {useContext, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {TransactionContext} from "../context/TransactionContext.jsx";
import axios from "axios";

const CompanyDetailsCard = () => {


	const [companyDetails, setCompanyDetails] = useState(
		{
			name: "",
			walletAddress: "",
			industry: "",
			website: ""
		}
	)
	const {currentAccount} = useContext(TransactionContext);
	useEffect(() => {
		const fetchCompany = async () => {
			console.log("Function working")
			console.log('dass',currentAccount);
			const details = await axios.get(`http://10.0.4.104:8000/apis/companies/details/${currentAccount}`)
			console.log(details)

			setCompanyDetails({
					name: details.data.company.name,
					walletAddress: details.data.company.wallet_address,
					industry: details.data.industry_sector.name,
					website: details.data.company.website
				}
			)
		}
		fetchCompany();
	}, [currentAccount])

	return (
		<div className="bg-primary w-4/12  font-albert flex flex-col justify-start p-8 rounded-lg h-4/5">
			<h1 className="text-secondary text-4xl">{companyDetails.name}</h1>
			<Link to={companyDetails.website} target={"_blank"} className="">{companyDetails.website}</Link>
			<p>{companyDetails.walletAddress}</p>
			<p>{companyDetails.industry}</p>
		</div>
	);
};

export default CompanyDetailsCard;