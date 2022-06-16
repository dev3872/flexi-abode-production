import { Box, Button, Container, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import propertyImage from "./4276500.jpg";
import React from "react";
import { useNavigate } from "react-router-dom";

function PropertySubmitted() {
	const navigate = useNavigate();
	function handleNavigation() {
		navigate("/dashboard/post-property")
	}
	return (
		<>
			<Box
				component="main"
				sx={{
					alignItems: "center",
					display: "flex",
					flexGrow: 1,
					minHeight: "100%",
				}}
			>
				<Container maxWidth="md">
					<Box
						sx={{
							alignItems: "center",
							display: "flex",
							flexDirection: "column",
						}}
					>
						<Typography align="center" color="textPrimary" variant="h1">
							Property Successfully Submitted
						</Typography>
						<Typography align="center" color="textPrimary" variant="subtitle2">
							Thank you for posting your property in FlexiAbode. 
						</Typography>
						<Box sx={{ textAlign: "center" }}>
							<img
								alt="Under development"
								src={propertyImage}
								style={{
									marginTop: 50,
									display: "inline-block",
									maxWidth: "100%",
									width: 560,
								}}
							/>
						</Box>

						<Button
							component="a"
							startIcon={<ArrowBackIcon fontSize="small" />}
							sx={{ mt: 3 }}
							variant="contained"
							onClick={handleNavigation}
						>
							Go back to dashboard
						</Button>
					</Box>
				</Container>
			</Box>
		</>
	);
}

export default PropertySubmitted;
