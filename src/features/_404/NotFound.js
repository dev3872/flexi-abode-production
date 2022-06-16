import { Box, Button, Container, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import notFoundImage from "./undraw_page_not_found_su7k.svg";
import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
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
							404: The page you are looking for isn’t here
						</Typography>
						<Typography align="center" color="textPrimary" variant="subtitle2">
							You either tried some shady route or you came here by mistake.
							Whichever it is, try using the navigation
						</Typography>
						<Box sx={{ textAlign: "center" }}>
							<img
								alt="Under development"
								src={notFoundImage}
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

export default NotFound;
