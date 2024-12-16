import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";

export default function Loggers() {
	const deviceList = [
		"Cryogenic data loggers",
		"Dry ice data loggers",
		"Temperature and humidity loggers",
		"-80 deg. Temp. logger/data logger",
		"-200 deg. Temp. logger",
		"-196 deg. Temp. logger",
		"Single use temperature logger",
		"Multi use temperature logger",
		"Pocket Probes for Temperature and Humidity",
		"Temperature and Humidity Loggers with and without LCD display",
		"-80 Deg. Temp. Logger to +380 Deg. Temp. Logger",
		"Cryogenic Data temperature Loggers",
		"Dry Ice Data temperature Loggers",
		"Liquid Nitrogen Temperature data Logger",
		"Vibration, Humidity and Temperature Logger",
		"Strip Chart Recorders",
		"Warm Mark and Cold Mark Labels",
		"Pen Type Hygrometers",
		"Infrared Laser Thermometers",
		"USB ready RFID Based Single Use and Multi-Use Loggers",
		"Temperature Stickers",
		"Cloud-based analytical devices that measure temperature, humidity, CO2 and vibration",
		"Wi-Fi Temperature and Humidity Monitoring for Hospitals, Laboratories and Research Organizations",
		"Wireless and Network enabled 8 Channel Data Logger",
		"Digital Dual Sensor Thermal Temperature Data Logger for industrial and remote monitoring of refrigerated, ambient and high temperature applications",
		"Digital Dual Sensor Thermal Temperature Data Logger for cryogenic industrial and remote monitoring applications",
		"GPS and Bluetooth enabled loggers",
	];

	const [viewDetails, setViewDetails] = useState([]);

	const handleViewDetailsClick = (index) => {
		if (!viewDetails.includes(index)) {
			setViewDetails([...viewDetails, index]);
		} else {
			setViewDetails(viewDetails.filter((i) => i !== index));
		}
	};

	const cardVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
	};

	return (
		<div className="text-center">
			<h2 className="w-[90%] text-left md:text-[35px] m-auto py-6 md:leading-[52px] font-semibold text-[#000339] text-3xl leading-[25px]">
				Data Loggers / Digital <span style={{ color: "#6D4AFF" }}>Monitoring</span> Devices
			</h2>
			<div className="flex py-6 justify-between items-center m-auto w-[90%]">
				<motion.div
					className="flex flex-col gap-4 sm:grid sm:grid-cols-2 sm:gap-4 w-full justify-center"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: false, amount: 0.3 }}
				>
					{deviceList.map((item, index) => (
						<motion.div
							key={index}
							className="relative flex text-left border border-gray-300 rounded-[20px] p-4 hover:border-purple-500 "
							variants={cardVariants}
						>
							{/* Toggle Content */}
							<div className="flex w-full">
								<div className="font-bold text-lg w-[85%] hover">{item}</div>
								
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</div>
	);
}
