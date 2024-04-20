import {useContext} from "react";
import {useNavigate} from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import {TransactionContext} from "../context/TransactionContext.jsx";
import axios from "axios";

const Home = () => {
	const navigate = useNavigate();

	const {connectWallet, currentAccount} = useContext(TransactionContext);
	console.log(currentAccount)
	// if(currentAccount){
	// 	navigate('/get-started');
	// }

	const accountExists = async (currentAccount) => {
		console.log("this is ", currentAccount)
		const value = await axios.get(`http://10.0.4.104:8000/apis/companies/exists/${currentAccount}/`);
		console.log(value.data.response)
		if (value.data.response) {
			// setTimeout(()=>{
				navigate('/dashboard')
			// },5000);

		} else {
			console.log("yaha par hai")
			navigate('/register')
		}
	}


	accountExists(currentAccount)
	return (
		<div>
			<Navbar/>

			{/*hero section*/}
			<section>
				<div className="flex flex-col justify-center items-center font-albert mt-16">
					<h1 className="text-[14rem]  font-albert text-center text-[#d0fc65] tracking-tight ">Satoshi's &

						{!currentAccount && <button
							className="mx-4 border-2 rounded-3xl py-2 text-xl px-10 tracking-normal text-white relative ml-16 bottom-4 hover:bg-[#FAF9F6] hover:border-[#798068] hover:text-[#798068]"
							onClick={connectWallet}>
							Connect Wallet
						</button>}

					</h1>
					<h1 className="text-[14rem] font-albert text-center text-secondary tracking-tight leading-[4rem] relative left-32">his
						Society</h1>
				</div>
			</section>

			{/* Description*/}

			<section className="absolute right-10 bottom-24 font-albert">
				<div className="flex gap-x-24">
					<div className="w-[20rem]">
						<h1 className="text-secondary text-2xl mb-4 font-light">Smart Technology</h1>
						<p className="text-white">We provide carbon software technology for companies to measure,
							monitor and reduce their
							carbon emissions in real-time</p>
					</div>
					<div className="w-[20rem] ">
						<h1 className="text-secondary text-2xl mb-4 font-light">Smart Technology</h1>
						<p className="text-white">We provide carbon software technology for companies to measure,
							monitor and reduce their
							carbon emissions in real-time</p>
					</div>
				</div>
			</section>
		</div>
	)
		;
};

export default Home;