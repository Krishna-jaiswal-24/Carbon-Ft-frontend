import React from 'react';
import {Link} from "react-router-dom";

const CompanyDetailsCard = () => {
	const companyDetails = {
		name: "Satoshi's Society",
		walletAddress: "0x1234567890abcdef",
		industry: "Technology",
		website: "https://satoshi.com"
	};
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