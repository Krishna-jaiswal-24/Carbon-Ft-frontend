import React from 'react';
import Navbar from "../components/Navbar.jsx";
import CompanyDetailsCard from "../components/CompanyDetailsCard.jsx";
import FootprintCard from "../components/FootprintCard.jsx";
import ChartCard from "../components/ChartCard.jsx";

const Dashboard = () => {
	return (
		<div className="bg-[#2e3918] w-screen h-screen">
			<Navbar />
			<div className="h-1/2 flex justify-between mx-10">
				<CompanyDetailsCard />
				<ChartCard />
			</div>
			<div>
				<h1 className="font-albert text-6xl text-secondary ml-10 mb-10">Footprint History</h1>
				<div className="flex mx-10 justify-between flex-wrap">
					<FootprintCard  timeStamp="20-04-2024" totalEmission="100000 CO2e"/>
					<FootprintCard  timeStamp="20-04-2024" totalEmission="100000 CO2e"/>
					<FootprintCard  timeStamp="20-04-2024" totalEmission="100000 CO2e"/>
					<FootprintCard  timeStamp="20-04-2024" totalEmission="100000 CO2e"/>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;