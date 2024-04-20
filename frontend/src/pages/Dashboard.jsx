import React, { useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import CompanyDetailsCard from "../components/CompanyDetailsCard.jsx";
import FootprintCard from "../components/FootprintCard.jsx";
import ChartCard from "../components/ChartCard.jsx";
import { TransactionContext } from "../context/TransactionContext.jsx";

const Dashboard = () => {
	const { currentAccount } = useContext(TransactionContext);
	const navigate = useNavigate();

	// Redirect if not logged in
	useEffect(() => {
		if (!currentAccount) {
			navigate('/');
		}
	}, [currentAccount, navigate]);

	return (
		<div className="bg-[#2e3918] w-full h-full">
			<Navbar />
			<main className="flex flex-col justify-between h-full p-10">
				<div className="flex justify-between items-start mb-10">
					<CompanyDetailsCard />
					<ChartCard />
				</div>
				<section>
					<h1 className="text-6xl text-secondary font-albert mb-10">Footprint History</h1>
					<div className="flex justify-between flex-wrap">
						<FootprintCard timeStamp="20-04-2024" totalEmission="100000 CO2e" />
						<FootprintCard timeStamp="20-04-2024" totalEmission="100000 CO2e" />
						<FootprintCard timeStamp="20-04-2024" totalEmission="100000 CO2e" />
						<FootprintCard timeStamp="20-04-2024" totalEmission="100000 CO2e" />
					</div>
				</section>
			</main>
		</div>
	);
};

export default Dashboard;
