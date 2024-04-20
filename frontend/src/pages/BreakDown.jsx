import React from 'react';
import BreakDownCard from "../components/BreakDownCard.jsx";

const BreakDown = () => {
	return (<div className="bg-[#2e3918] w-screen h-screen flex justify-between items-center px-10">
		<h1 className="text-secondary text-[6rem] font-albert font-medium">Breakdown</h1>

		<div className="flex flex-col px-40">
			<BreakDownCard value={67}
			               description={"Scope 1 emissions (direct emissions) \n" + "Scope 1 emissions are “direct emissions” from sources that are owned or controlled by the company. This can include emissions from:"}/>
			<hr className="w-full border-black"/>
			<BreakDownCard value={47}
			               description={"Scope 1 emissions (direct emissions) \n" + "Scope 1 emissions are “direct emissions” from sources that are owned or controlled by the company. This can include emissions from:"}/>
			<hr className="w-full border-black"/>
			<BreakDownCard value={61}
			               description={"Scope 3 emissions (indirect emissions) Scope 3 emissions include all other" +
				               "indirect emissions that occur across the value chain and are outside of the organisation’s direct control."}/>
		</div>
	</div>);
};

export default BreakDown;