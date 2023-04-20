import React, { useState, useEffect } from "react";
import ballon2 from "../assets/images/ballon2.png";
import ballon from "../assets/images/ballon.png";

const BalloonDisplay = () => {
	const [balloonPositions, setBalloonPositions] = useState([]);

	useEffect(() => {
		const screenWidth = window.innerWidth;
		const screenHeight = window.innerHeight;
		const newPositions = [];
		for (let i = 0; i < 10; i++) {
			const left = Math.floor(Math.random() * screenWidth);
			const top = Math.floor(Math.random() * screenHeight);
			newPositions.push({ left, top });
		}
		setBalloonPositions(newPositions);
	}, []);

	return (
		<div className="fixed inset-0 h-full w-full transition-all translate-animation">
			<div className="relative w-screen h-screen">
				{balloonPositions.map(({ left, top }, index) => (
					<div key={index}>
						<img
							draggable={false}
							src={ballon2}
							alt={`Balloon ${index + 1}`}
							style={{
								position: "absolute",
								left: `${left}px`,
								top: `${top}px`,
								width: "100px", 
								height: "100px",
							}}
						/>
						<img
							draggable={false}
							src={ballon}
							alt={`Balloon ${index + 1}`}
							style={{
								position: "absolute",
								left: `${left + left}px`,
								top: `${top + left}px`,
								width: "100px",
								height: "100px"
							}}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default BalloonDisplay;
