import Image from "next/image";
import { useState } from "react";

export default function ChemistryAtWorkSection() {
	// State to control the "Read More" functionality
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<div className="bg-[#EEEAFF] rounded-[30px] md:w-4/5 m-auto container flex flex-col md:flex-row py-8 sm:py-16 justify-center items-center">
			{/* Text Section */}
			<div className="text-black md:w-1/2 w-full text-justify pb-8 sm:pb-0">
				<h1 className="text-3xl font-bold my-4">
					What <span className="text-[#6D4AFF]">drives</span> us?
				</h1>
				<div
					className={`text-gray-700 mb-6 ${
						!isExpanded ? "line-clamp-5 md:line-clamp-none" : ""
					}`}
				>
					Our mission is to leverage the competitive advantages of diverse global locations to deliver unmatched value, quality, and affordability in products and services to customers worldwide. <span className="text-[#6D4AFF]">Guided by the principles of strong relationships, mutual respect, and trust, we strive for flawless execution to achieve 100% productivity and profitability across the entire supply chain.</span> Innovation, agility, and a commitment to being different drive us to consistently remain the first choice for both manufacturers and customers. With an ambitious aim to become a leading product sourcing services company globally, we are dedicated to breaking boundaries and conducting business without borders.{" "}
					
				</div>
				{/* "Read More" button visible only on mobile screens */}
				<div className="block md:hidden">
					<button
						className="text-[#6D4AFF] font-semibold underline"
						onClick={() => setIsExpanded(!isExpanded)}
					>
						{isExpanded ? "Read Less" : "Read More"}
					</button>
				</div>
			</div>

			{/* Image Section */}
			<div className="md:w-1/2 w-full md:px-10 m-auto">
				<div className="relative">
					<Image
						src="/images/Tempcheck.jpg"
						className="rounded-lg"
						alt="About MediBank section"
						width={640}
						height={480}
					/>
				</div>
			</div>
		</div>
	);
}
