import React from 'react';
import {useNavigate} from "react-router-dom";

const FootprintCard = (props) => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate('/breakdown');
	}
	return (
		<div className="bg-primary w-80 flex flex-col items-center justify-center h-40 rounded-md my-8 cursor-pointer" onClick={handleClick}>
			<p className={" font-albert text-4xl font-bold text-secondary"}>{props.totalEmission}</p>
			<h1 className="text-white font-albert">{props.timeStamp}</h1>

		</div>
	);
};

export default FootprintCard;