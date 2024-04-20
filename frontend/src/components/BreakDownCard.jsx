import React from 'react';

const BreakDownCard = (props) => {
	return (
		<div>
			<div className="flex justify-between items-center mt-10">
				<h1 className="bg-transparent text-[10rem] w-80 text-secondary border-1 border-secondary outline-secondary">{props.value}<span className="text-4xl text-secondary">%</span></h1>
				<p className="text-white text-xl font-albert w-3/5">{props.description}</p>

			</div>
		</div>
	);
};

export default BreakDownCard;