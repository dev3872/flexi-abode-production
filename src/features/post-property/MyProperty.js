import {
	Avatar,
	Box,
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Pagination,
	Paper,
	Select,
	Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import api from "../../utils/api";

function MyProperty() {
	const [myProperty, setMyProperty] = useState([]);
	const [page, setPage] = useState(1);
	const [count, setCount] = useState(1);
	const [city, setCity] = useState([]);
	const [propertyType, setPropertyType] = useState([]);
	const [pointer, setPointer] = useState({ initial: 0, last: 0 });
	useEffect(() => {
		async function getMyProperty() {
			try {
				const res = await api.get("/searchProperty/myProperty");
				setMyProperty([...res.data]);
				setCount(Math.ceil(res.data.length / 3));
			} catch (error) {
				console.log(error);
			}
		}
		getMyProperty();
	}, []);
	useEffect(() => {
		setPointer({
			initial: (page - 1) * 3,
			last:
				(page - 1) * 3 + 3 < myProperty.length
					? (page - 1) * 3 + 3
					: myProperty.length,
		});
	}, [page, count, myProperty.length]);

	const [filter, setFilter] = useState({
		propertyType: "",
		city: "",
		bedroom: "",
	});
	useEffect(() => {
		myProperty.forEach(function (property, index) {
			if (city.indexOf(property.inputLocationCity.inputLocationCity) === -1)
				setCity([...city, property.inputLocationCity.inputLocationCity]);
		});
	}, [myProperty, city]);
	useEffect(() => {
		myProperty.forEach(function (property, index) {
			if (
				propertyType.indexOf(property.propertyTypeSelect.propertyTypeSelect) ===
				-1
			)
				setPropertyType([
					...propertyType,
					property.propertyTypeSelect.propertyTypeSelect,
				]);
		});
	}, [myProperty, propertyType]);

	useEffect(() => {
		console.log(filter);
		async function getFilterProperty() {
			try {
				const res = await api.post("/searchProperty/filterProperty", filter);
				setMyProperty([...res.data]);
				setCount(Math.ceil(res.data.length / 3));
			} catch (error) {
				console.log(error);
			}
		}
		getFilterProperty();
	}, [filter]);

	async function handleConnect(email) {
		try {
			const res = await api.post("/connect/connectRequest", { email: email });
			console.log(res);
		} catch (error) {
			console.log(error);
		}
	}
	function handlePageChange(event, value) {
		setPage(value);
	}
	function handleChange(event) {
		setFilter({ ...filter, [event.target.name]: event.target.value });
	}

	return (
		<div>
			<Box>
				<Typography variant="h5" sx={{ fontWeight: "bolder" }}>
					My Property
				</Typography>
				<Paper elevation={6} sx={{ mt: "1rem" }}>
					<FormControl sx={{ width: "20rem" }}>
						<InputLabel id="propertyType-label">Property Type</InputLabel>
						<Select
							labelId="propertyType-label"
							name="propertyType"
							value={filter.propertyType}
							label="Property Type"
							onChange={handleChange}
						>
							{propertyType.map(function (newPropertyType, index) {
								return (
									<MenuItem
										key={"propertyType-" + index}
										value={newPropertyType}
									>
										{newPropertyType}
									</MenuItem>
								);
							})}
						</Select>
					</FormControl>
					<FormControl sx={{ width: "20rem" }}>
						<InputLabel id="city-label">City</InputLabel>
						<Select
							labelId="city-label"
							name="city"
							value={filter.city}
							label="City"
							onChange={handleChange}
						>
							{city.map(function (newCity, index) {
								return (
									<MenuItem key={"city-" + index} value={newCity}>
										{newCity}
									</MenuItem>
								);
							})}
						</Select>
					</FormControl>
					<FormControl sx={{ width: "20rem" }}>
						<InputLabel id="bedroom-label">Bedroom</InputLabel>
						<Select
							labelId="bedroom-label"
							name="bedroom"
							value={filter.bedroom}
							label="Bedroom"
							onChange={handleChange}
						>
							<MenuItem value={1}>One</MenuItem>
							<MenuItem value={2}>Two</MenuItem>
							<MenuItem value={3}>Three</MenuItem>
						</Select>
					</FormControl>
				</Paper>
				<Paper sx={{ display: "flex", height: "2rem", mt: "1rem" }}>
					<Typography sx={{ fontWeight: "bold", width: "13rem" }}>
						Image
					</Typography>
					<Typography sx={{ fontWeight: "bold", width: "10rem" }}>
						Property Type
					</Typography>
					<Typography sx={{ fontWeight: "bold", width: "10rem" }}>
						Location
					</Typography>
					<Typography sx={{ fontWeight: "bold", width: "6rem" }}>
						Bedrooms
					</Typography>
					<Typography sx={{ fontWeight: "bold", width: "6rem" }}>
						Bathrooms
					</Typography>
					<Typography sx={{ fontWeight: "bold", width: "10rem" }}>
						Furnishing
					</Typography>
					<Typography sx={{ fontWeight: "bold", width: "10rem" }}>
						Amenity
					</Typography>
					<Typography sx={{ fontWeight: "bold", width: "10rem" }}>
						Price
					</Typography>
					<Typography sx={{ fontWeight: "bold", width: "10rem" }}>
						Posted by
					</Typography>
				</Paper>
				{myProperty
					.slice(pointer.initial, pointer.last)
					.map(function (property, index) {
						return (
							<Paper
								sx={{ display: "flex", my: "1rem", height: "11rem" }}
								elevation={5}
								key={"property-" + index}
							>
								<Avatar
									sx={{ height: "10rem", width: "10rem" }}
									variant="square"
									src={`http://localhost:4000/${property.imageDetails[0]}`}
								/>
								<Typography sx={{ mx: "2rem" }}>
									{property.propertyTypeSelect.propertyTypeSelect}
								</Typography>
								<Typography sx={{ mx: "1rem" }}>
									{property.inputLocationLocality.inputLocationLocality},{" "}
									{property.inputLocationCity.inputLocationCity}
								</Typography>
								<Typography sx={{ mx: "3rem" }}>
									{property.propertyBedroom.propertyBedroom}
								</Typography>
								<Typography sx={{ mx: "3rem" }}>
									{property.propertyBathroom.propertyBathroom}
								</Typography>
								<Box
									sx={{ mx: "2rem", display: "flex", flexDirection: "column" }}
								>
									{property.furnishings.map((furnishing, index) => {
										return (
											<Typography key={"furnishing-" + index}>
												{furnishing}
											</Typography>
										);
									})}
								</Box>
								<Box
									sx={{ mx: "2rem", display: "flex", flexDirection: "column" }}
								>
									{property.amenities.map((amenity, index) => {
										return (
											<Typography key={"amenity-" + index}>
												{amenity}
											</Typography>
										);
									})}
								</Box>
								<Typography sx={{ mx: "3rem" }}>
									{property.inputCost.inputCost}
								</Typography>
								<Typography sx={{ mx: "3rem" }}>
									{property.user.firstName}
								</Typography>
								<Button
									onClick={() => handleConnect(property.user.email)}
									sx={{ marginLeft: "auto", marginRight: "2rem" }}
									variant="outlined"
								>
									Connect
								</Button>
							</Paper>
						);
					})}
				<Box sx={{ display: "flex", width: "100%", justifyContent: "center" }}>
					<Pagination
						size="large"
						page={page}
						count={count}
						color="primary"
						onChange={handlePageChange}
					/>
				</Box>
			</Box>
		</div>
	);
}

export default MyProperty;
