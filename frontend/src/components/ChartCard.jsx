import React from 'react';
import {Line} from 'react-chartjs-2';
import {
	CategoryScale,
	Chart as ChartJS,
	Legend,
	LinearScale,
	LineElement,
	PointElement,
	Title,
	Tooltip
} from 'chart.js';




ChartJS.register(LineElement, PointElement, CategoryScale, Legend, LinearScale, Title, Tooltip);
const ChartCard = () => {
	const options={}

	const data={
		labels: ['1', '2', '3', '4', '5', '6', '7','1', '2', '3', '4', '5', '6', '7'],
		datasets: [
			{
				label: 'CO2e',
				data: [82, 1, 47, 9, 64, 30, 5, 21, 73, 94],
				fill: false,
				borderColor: "#F7DCB9"
			},
			{
				label: 'CO2f',
				data: [7, 23, 99, 42, 88, 15, 10, 6, 51, 3],
				fill: false,
				borderColor: "red",
			},
		],

	};


	return (
		<div className="h-auto w-3/5 p-8 rounded-lg bg-primary">
			<h1 className="text-secondary font-albert text-5xl">Graph</h1>
			<div className="h-[90%]"> <Line  options={options} data={data}/></div>

		</div>
	);
};

export default ChartCard;