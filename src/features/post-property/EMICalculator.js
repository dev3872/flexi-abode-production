import { Box, Paper, Slider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Chart, PieSeries } from "@devexpress/dx-react-chart-material-ui";

function EMICalculator() {
	const [loanAmount, setLoanAmount] = useState(4000000);
	const [rateOfInterest, setRateOfInterest] = useState(6);
	const [loanTenure, setLoanTenure] = useState(5);
	const [monthyEMI, setMonthyEMI] = useState(0);
	const [totalInterest, setTotalInterest] = useState(0);
	const [totalAmount, setTotalAmount] = useState(0);
	useEffect(() => {
		setTotalInterest((loanAmount * rateOfInterest * loanTenure) / 100);
		setMonthyEMI(Math.ceil(totalInterest / (12 * loanTenure)));
		setTotalAmount(loanAmount + totalInterest);
        setChartData([{field:"Principal",value:totalAmount},{field:"Interest",value:totalInterest}])
	}, [loanAmount, rateOfInterest, loanTenure]);
	const [chartData, setChartData] = useState([
		{ field: "Principal", value: loanAmount },
		{ field: "Interest", value: totalInterest },
	]);
	function handleSliderLoanAmount(event, value) {
		setLoanAmount(value);
	}
	function handleSliderRateOfInterest(event, value) {
		setRateOfInterest(value);
	}
	function handleSliderLoanTenure(event, value) {
		setLoanTenure(value);
	}

	return (
		<Paper
			sx={{ height: "40rem", width: "40rem", display: "flex" }}
			elevation={10}
		>
			<Box
				sx={{
					width: "60%",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					padding: "2rem",
					justifyContent: "space-around",
				}}
			>
				<Box sx={{ display: "flex", justifyContent: "space-between" }}>
					<Typography sx={{ padding: "10px" }}>Loan Amount</Typography>
					<Typography
						sx={{
							backgroundColor: "#E5FAF5",
							color: "#01D09D",
							padding: "10px",
						}}
					>
						Rs {loanAmount}
					</Typography>
				</Box>
				<Box>
					<Slider
						min={10000}
						max={20000000}
						name="loanAmount"
						onChange={handleSliderLoanAmount}
						value={loanAmount}
						color="secondary"
						aria-label="Default"
						valueLabelDisplay="auto"
					/>
				</Box>
				<Box sx={{ display: "flex", justifyContent: "space-between" }}>
					<Typography sx={{ padding: "10px" }}>Rate Of Interest</Typography>
					<Typography
						sx={{
							backgroundColor: "#E5FAF5",
							color: "#01D09D",
							padding: "10px",
						}}
					>
						{rateOfInterest} %
					</Typography>
				</Box>
				<Box>
					<Slider
						min={3}
						max={25}
						value={rateOfInterest}
						onChange={handleSliderRateOfInterest}
						color="secondary"
						aria-label="Default"
						valueLabelDisplay="auto"
					/>
				</Box>
				<Box sx={{ display: "flex", justifyContent: "space-between" }}>
					<Typography sx={{ padding: "10px" }}>Loan tenure</Typography>
					<Typography
						sx={{
							backgroundColor: "#E5FAF5",
							color: "#01D09D",
							padding: "10px",
						}}
					>
						{loanTenure} Yr
					</Typography>
				</Box>
				<Box>
					<Slider
						min={2}
						max={20}
						value={loanTenure}
						onChange={handleSliderLoanTenure}
						defaultValue={50}
						color="secondary"
						aria-label="Default"
						valueLabelDisplay="auto"
					/>
				</Box>
				<Box sx={{ display: "flex", flexDirection: "column" }}>
					<Box sx={{ display: "flex", justifyContent: "space-between" }}>
						<Typography sx={{ padding: "10px" }}>Monthy EMI</Typography>
						<Typography
							sx={{
								backgroundColor: "#E5FAF5",
								color: "#01D09D",
								padding: "10px",
							}}
						>
							Rs {monthyEMI}
						</Typography>
					</Box>
					<Box sx={{ display: "flex", justifyContent: "space-between" }}>
						<Typography sx={{ padding: "10px" }}>Principal Amount</Typography>
						<Typography
							sx={{
								backgroundColor: "#E5FAF5",
								color: "#01D09D",
								padding: "10px",
							}}
						>
							Rs {loanAmount}
						</Typography>
					</Box>
					<Box sx={{ display: "flex", justifyContent: "space-between" }}>
						<Typography sx={{ padding: "10px" }}>Total Interest</Typography>
						<Typography
							sx={{
								backgroundColor: "#E5FAF5",
								color: "#01D09D",
								padding: "10px",
							}}
						>
							Rs {totalInterest}
						</Typography>
					</Box>
					<Box sx={{ display: "flex", justifyContent: "space-between" }}>
						<Typography sx={{ padding: "10px" }}>Total Amount</Typography>
						<Typography
							sx={{
								backgroundColor: "#E5FAF5",
								color: "#01D09D",
								padding: "10px",
							}}
						>
							Rs {totalAmount}
						</Typography>
					</Box>
				</Box>
			</Box>
			<Box sx={{ width: "40%" }}>
				<Chart data={chartData}>
					<PieSeries valueField="value" argumentField="field" />
				</Chart>
			</Box>
		</Paper>
	);
}

export default EMICalculator;
