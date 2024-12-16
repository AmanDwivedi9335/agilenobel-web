import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
	FaAngleDown,
	FaChevronCircleDown,
	FaAngleUp,
	FaChevronCircleUp,
} from "react-icons/fa";

export default function WhyUs() {
	const blogList = [
		{
			imgurl: "/images/blogs/blog1.webp",
			title: "All Lithium Salts, Brine and Lithium Derivatives",
			source: "I",
			path: "/blog/article1",
			content:
				"AgileNobel represents and is connected with world’s major producers and provides of all grades and types of lithium salts, lithium brine, pseudomene and related products.",
		},
		{
			imgurl: "/images/blogs/blog2.webp",
			title: "Super Absorbent Polymers",
			source: "II",
			path: "/blog/article2",
			content:
				"We work with M/s Emerging Technologies, USA for the Indian and Asian markets for distribution of their various super absorbent polymers in powder and liquid forms.",
		},
		{
			imgurl: "/images/blogs/blog3.webp",
			title: "Nano Materials",
			source: "III",
			path: "/blog/article3",
			content:
				"Agilenobel has its own incubator lab for developing and producing various nano materials focussing mainly on carbons, silica, alumina and similar inorganic oxides.",
		},
		{
			imgurl: "/images/blogs/blog4new.webp",
			title: "Ferro/Nobel and Bulk Alloys",
			source: "IV",
			path: "/blog/article4",
			content:
				"Products in this range include Low Carbon Ferro Chrome, High Carbon Ferro Chrome, Ferro Molybdenum, Manganese Flakes and Lumps. We also work on Ferro Tungsten, Ferro Alloys and Rare Earth along with other chemical compound(s) such as Oxides, Pent-oxides, Dioxides, and Trioxides.",
		},
		
	];

	const [mainBlog, setMainBlog] = useState(blogList[0]); // Set the initial main blog
	const [isSwitching, setIsSwitching] = useState(false);
	const [viewDetails, setViewDetails] = useState([]);

	

	const handleViewDetailsClick = (title) => {
		if (!viewDetails.includes(title)) {
			setViewDetails([...viewDetails, title]); // Add the title to the viewDetails array
		} else {
			setViewDetails(viewDetails.filter((b) => b !== title)); // Remove the title from the viewDetails array
		}
	};

	// Animation Variants
	const blogCardVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
	};

	
	return (
		<div className="text-center">
			<h2 className="w-[90%] text-left md:text-[35px] m-auto py-6 md:leading-[52px] font-semibold text-[#000339] text-3xl leading-[25px]">
				Product <span style={{ color: "#6D4AFF" }}>Streams</span> - Chemical
			</h2>
			<h3 className="w-[90%] text-left m-auto text-[#000339] text-[17px] leading-[25px]">
			Comprehensive chemical solutions, from lithium derivatives to nano materials, tailored to meet diverse industry needs across global markets.
			</h3>
			<div className="flex py-6 justify-between items-center mxxxl:container w-[90%] m-auto xl:container">
				{/* Other Blogs */}
				<motion.div
					className="flex flex-col gap-4 sm:grid sm:grid-cols-2 sm:gap-4 w-full justify-center"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: false, amount: 0.3 }}
				>
					{blogList.map((item, index) => (
						<motion.div
							key={index}
							className={`relative flex sm:flex-wrap text-left border border-gray-300 rounded-[20px] p-4 `}
							variants={blogCardVariants}
						>
							{/* Icon Section */}
							<div className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center">
								<span className="text-sm font-bold">{item.source}</span>
							</div>

							{/* Content Section */}
							<div className="flex ml-8 items-start w-full">
								<button
									className="text-lg text-blue-500 rounded-full mt-2 w-max sm:hidden" // Only show on mobile
									onClick={() => handleViewDetailsClick(item.title)}
								>
									{viewDetails.includes(item.title) ? (
										<FaChevronCircleUp />
									) : (
										<FaChevronCircleDown />
									)}
								</button>
								<div className="flex flex-col items-center gap-2 w-full">
									<div className="font-bold text-lg w-[85%]">{item.title}</div>
									{/* Always show content on desktop, show conditionally on mobile */}
									<div
										className={`text-gray-600 w-[85%] text-sm ${viewDetails.includes(item.title) ? "block sm:block" : "hidden sm:block"}`}
									>
										{item.content}
									</div>
								</div>
							</div>

							{/* Arrow Icon */}
							<div
								className="absolute sm:h-1/2 w-[30px] md:w-[60px] ml-auto -bottom-0.5 -right-0.5 flex justify-center items-center"
								style={{
									backgroundColor: "white",
									borderRadius: "20px 0px 20px 0px", // Top-left, Top-right, Bottom-right, Bottom-left
									borderWidth: "1px 0px 0px 1px", // Top, Right, Bottom, Left
								}}
							>
								<span className="text-blue-500 text-xl transform rotate-45">
									&#8594;
								</span>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
			{/* <motion.div
				className="text-center my-1"
				variants={buttonVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
			>
				<a
					href="/blog"
					className="bg-[#6D4AFF] p-3 px-6 text-white rounded-[10px]"
				>
					View All
				</a>
			</motion.div> */}
		</div>
	);
}
