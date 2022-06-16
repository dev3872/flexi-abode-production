import React, { useRef, useState } from "react";
import {
	Avatar,
	Box,
	Button,
	FormControl,
	FormControlLabel,
	FormLabel,
	MenuItem,
	Paper,
	Radio,
	RadioGroup,
	Select,
	TextField,
	Typography,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import AddIcon from "@mui/icons-material/Add";
import ArmChair from "../../icons/armchair.png";
import BookShelf from "../../icons/book-shelf.png";
import DiningChair from "../../icons/dining-chair.png";
import DiningTable from "../../icons/dining-table.png";
import DoubleBed from "../../icons/double-bed.png";
import RoundTable from "../../icons/round-table.png";
import SideTable from "../../icons/side-table.png";
import SingleBed from "../../icons/single-bed.png";
import Sofa from "../../icons/sofa.png";
import TvTable from "../../icons/tv-table.png";
import Wardrobe from "../../icons/wardrobe.png";
import AC from "../../icons/ac.png";
import Wifi from "../../icons/wifi.png";
import Oven from "../../icons/oven.png";
import Fridge from "../../icons/fridge.png";
import Drawer from "../../icons/drawer.png";
import DeskLamp from "../../icons/desk-lamp.png";
import CoatRack from "../../icons/coat-rack.png";
import Elevator from "../../icons/elevator.png";
import CCTV from "../../icons/cctv-camera.png";
import ReceptionBell from "../../icons/reception-bell.png";
import Staff from "../../icons/staff.png";
import FireExtinguisher from "../../icons/fire-extinguisher.png";
import FirstAidKit from "../../icons/first-aid-kit.png";
import Gym from "../../icons/gym.png";
import Spa from "../../icons/spa.png";
import Park from "../../icons/park.png";
import HotelBell from "../../icons/hotel-bell.png";
import RoomService from "../../icons/room-service.png";
import Pool from "../../icons/pool.png";
import axios from "axios";
import api from "../../utils/api"
import { useNavigate } from "react-router-dom";
function PostProperty() {
	const [formData, setFormData] = useState({
		propertyTypeSelect: "",
		furnishings: [],
		amenities: [],
	});
	const [builtInUnit, setBuiltInUnit] = useState("Select Unit");
	const [imageDetails, setImageDetails] = useState([]);
	const refFile = useRef(null);
	const navigate = useNavigate()
	const handleSubmit = async()=>{
		try{
			const data={...formData,imageDetails,builtInUnit}
			navigate("/dashboard/propertySubmitted")
			const res = await api.post("/postProperty/submit", data);
			console.log(res)

		}catch(error){
			console.log(error)
		}
	}
	const handleFurnishings = (event) => {
		const indexalt = formData.furnishings.indexOf(event.target.alt);
		if (indexalt !== -1) {
			let formData1 = [...formData.furnishings];
			formData1.splice(indexalt, 1);
			setFormData({
				...formData,
				furnishings: [...formData1],
			});
		} else
			setFormData({
				...formData,
				furnishings: [...formData.furnishings, event.target.alt],
			});
	};
	const handleAmenities = (event) => {
		const indexalt = formData.amenities.indexOf(event.target.alt);
		if (indexalt !== -1) {
			let formData1 = [...formData.amenities];
			formData1.splice(indexalt, 1);
			setFormData({
				...formData,
				amenities: [...formData1],
			});
		} else
			setFormData({
				...formData,
				amenities: [...formData.amenities, event.target.alt],
			});
	};
	const handleAddImage = () => {
		refFile.current.click();
	};
	async function handleImageUpload(event) {
		console.log(event.target.files[0]);
		var formData = new FormData();
		formData.append("image", event.target.files[0]);
		try {
			const res = await axios({
				method: "POST",
				url: "/images",
				data: formData,
			});
			console.log(res.data);
			setImageDetails([...imageDetails, res.data]);
			console.log(imageDetails);
		} catch (error) {
			console.log(error);
		}
	}
	const updateBuiltInUnit = (event) => {
		setBuiltInUnit(event.target.value);
	};
	const ITEM_HEIGHT = 48;
	const ITEM_PADDING_TOP = 8;
	const MenuProps = {
		PaperProps: {
			style: {
				maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
				width: 250,
			},
		},
	};
	const handleFormChange = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};
	return (
		<Box sx={[{ width: { xs: "100%", md: 800 } }]}>
			<Typography
				variant="h4"
				sx={{
					fontSize: { xs: "1.6rem", md: "2rem" },
					fontWeight: { xs: "500", md: "900" },
					lineHeight: "4rem",
				}}
			>
				Sell or Rent your Property
			</Typography>
			<Box
				sx={{
					width: { xs: "100%", md: "80%" },
					height: { xs: 200, md: 130 },
					backgroundColor: "#F6F7F6",
					padding: "10px 20px",
				}}
			>
				<div>
					<Typography
						variant="p"
						sx={{
							fontSize: { xs: "1rem", md: "1.4rem" },
							fontWeight: 500,
							margin: "10px",
						}}
					>
						You are Posting this property for{" "}
						<span style={{ textDecoration: "line-through" }}>₹5000</span>{" "}
						<span style={{ backgroundColor: "#FFCD32", padding: "0px 5px" }}>
							FREE!
						</span>
					</Typography>
				</div>
				<div>
					<Typography
						variant="p"
						sx={{
							fontSize: { xs: "1rem", md: "1.4rem" },
							display: "flex",
							margin: "8px",
						}}
					>
						<CheckIcon sx={{ color: "#2AB600", margin: "0px 5px" }} /> Get
						Contact Details of upto{" "}
						<span style={{ textDecoration: "line-through" }}> 5 </span>{" "}
						<span> Unlimited Responses</span>
					</Typography>
				</div>
				<div>
					<Typography
						variant="p"
						sx={{
							fontSize: { xs: "1rem", md: "1.4rem" },
							display: "flex",
							margin: "8px",
						}}
					>
						<CheckIcon sx={{ color: "#2AB600", margin: "0px 5px" }} /> Access to
						15 Lac Buyers {"&"} Tenants
					</Typography>
				</div>
			</Box>

			<div style={{ display: "flex", flexDirection: "column" }}>
				<Typography
					variant="h5"
					sx={{
						fontWeight: "500",
						lineHeight: "3rem",
						margin: "30px 0px 10px 0px",
					}}
				>
					Personal Details
				</Typography>
				<FormControl>
					<FormLabel id="userTypeSelectLabel">I am</FormLabel>
					<RadioGroup
						row
						onChange={handleFormChange}
						aria-labelledby="userTypeSelectLabel"
						name="userTypeSelect"
					>
						<FormControlLabel value="Owner" control={<Radio />} label="Owner" />
						<FormControlLabel value="Agent" control={<Radio />} label="Agent" />
						<FormControlLabel
							value="Builder"
							control={<Radio />}
							label="Builder"
						/>
					</RadioGroup>
				</FormControl>
				<Typography
					variant="h5"
					sx={{
						fontWeight: "500",
						lineHeight: "3rem",
						margin: "30px 0px 10px 0px",
					}}
				>
					Property Details
				</Typography>
				<FormControl>
					<FormLabel id="propertyForSelectLabel">For</FormLabel>
					<RadioGroup
						row
						onChange={handleFormChange}
						aria-labelledby="propertyForSelectLabel"
						name="propertyForSelect"
					>
						<FormControlLabel value="Sale" control={<Radio />} label="Sale" />
						<FormControlLabel
							value="Rent/Lease"
							control={<Radio />}
							label="Rent/Lease"
						/>
						<FormControlLabel
							value="PG/Hostel"
							control={<Radio />}
							label="PG/Hostel"
						/>
					</RadioGroup>
				</FormControl>
				<FormControl sx={{ width: 300, mt: "1rem" }}>
					<FormLabel id="propertyTypeSelectLabel">Property Type</FormLabel>
					<Select
						labelId="propertyTypeSelectLabel"
						onChange={handleFormChange}
						name="propertyTypeSelect"
						variant="standard"
						value={formData.propertyTypeSelect}
						MenuProps={MenuProps}
					>
						<MenuItem value="Select property Type">
							<strong>Select property Type</strong>
						</MenuItem>
						<MenuItem value="Commercial" disabled>
							<strong>ALL RESIDENTIAL</strong>
						</MenuItem>
						{[
							"Flat/ Apartment",
							"Residential House",
							"Villa",
							"Builder Floor Apartment",
							"Residential Land/ Plot",
							"Penthouse",
							"Studio Apartment",
						].map((property, index) => {
							return (
								<MenuItem key={`${index}-${property}`} value={property}>
									{property}
								</MenuItem>
							);
						})}
						<MenuItem value="Commercial" disabled>
							<strong>ALL COMMERCIAL</strong>
						</MenuItem>
						{[
							"Commercial Office Space",
							"Office in IT Park/ SEZ",
							"Commercial Shop",
							"Commercial Showroom",
							"Commercial Land",
							"Warehouse/ Godown",
							"Industrial Land",
							"Industrial Building",
							"Industrial Shed",
						].map((property, index) => {
							return (
								<MenuItem key={`${index}-${property}`} value={property}>
									{property}
								</MenuItem>
							);
						})}
					</Select>
				</FormControl>
				<Typography
					variant="h5"
					sx={{
						fontWeight: "500",
						lineHeight: "3rem",
						margin: "30px 0px 10px 0px",
					}}
				>
					Property Location
				</Typography>
				<Box
					sx={{
						display: "flex",
						flexDirection: {
							xs: "column",
							sm: "column",
							md: "row",
						},
					}}
				>
					<FormControl sx={{ width: 300, margin: "1rem 1rem 0rem 0rem" }}>
						<FormLabel id="inputLocationCityLabel">City</FormLabel>
						<TextField
							onChange={handleFormChange}
							name="inputLocationCity"
							aria-label="inputLocationCityLabel"
							variant="standard"
						/>
					</FormControl>
					<FormControl sx={{ width: 300, margin: "1rem 1rem 0rem 0rem" }}>
						<FormLabel id="inputLocationLocalityLabel">Locality</FormLabel>
						<TextField
							onChange={handleFormChange}
							name="inputLocationLocality"
							aria-label="inputLocationLocalityLabel"
							variant="standard"
						/>
					</FormControl>
				</Box>
				<Typography
					variant="h5"
					sx={{
						fontWeight: "500",
						lineHeight: "3rem",
						margin: "30px 0px 10px 0px",
					}}
				>
					Images
				</Typography>
				<Box
					sx={{
						display: "flex",
						flexWrap: "wrap",
						"& > *": {
							margin: "0.5rem",
							width: "13rem",
							height: "13rem",
						},
						justifyContent: "center",
					}}
				>
					{imageDetails.map((image, index) => (
						<Paper key={"image" + index} elevation={3} id={"image" + index}>
							<img
								width={150}
								src={`http://localhost:4000/${image}`}
								alt="images-1"
							/>
						</Paper>
					))}
					<Paper
						onClick={handleAddImage}
						elevation={12}
						sx={[
							{
								m: 1,
								width: 128,
								height: 128,
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							},
							{ "&:hover": { cursor: "pointer" } },
						]}
					>
						<input
							type="file"
							ref={refFile}
							onChange={handleImageUpload}
							name="input-file"
							id="input-file"
							hidden
						/>
						<AddIcon
							htmlColor="blue"
							fontSize="large"
							titleAccess="Add Image"
						/>
					</Paper>
				</Box>
				<Typography
					variant="h5"
					sx={{
						fontWeight: "500",
						lineHeight: "3rem",
						margin: "30px 0px 10px 0px",
					}}
				>
					Furnishing
				</Typography>
				<Box sx={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
					{[
						{ furnishing: "Arm Chair", source: ArmChair },
						{ furnishing: "Book Shelf", source: BookShelf },
						{ furnishing: "Dining Chair", source: DiningChair },
						{ furnishing: "Dining Table", source: DiningTable },
						{ furnishing: "Double Bed", source: DoubleBed },
						{ furnishing: "Round Table", source: RoundTable },
						{ furnishing: "Side Table", source: SideTable },
						{ furnishing: "Single Bed", source: SingleBed },
						{ furnishing: "Sofa", source: Sofa },
						{ furnishing: "TV Table", source: TvTable },
						{ furnishing: "Wardrobe", source: Wardrobe },
						{ furnishing: "AC", source: AC },
						{ furnishing: "Oven", source: Oven },
						{ furnishing: "Fridge", source: Fridge },
						{ furnishing: "Wifi", source: Wifi },
						{ furnishing: "Coat Rack", source: CoatRack },
						{ furnishing: "Drawer", source: Drawer },
						{ furnishing: "Desk Lamp", source: DeskLamp },
					].map(function (furnish, index) {
						return (
							<Avatar
								key={index}
								onClick={handleFurnishings}
								variant="square"
								sx={[
									{
										width: "100px",
										height: "100px",
										m: { md: "15px", xs: "4px" },
										"&:hover": { cursor: "pointer" },
									},
									formData.furnishings.indexOf(furnish.furnishing) >= 0
										? { backgroundColor: "black" }
										: {},
								]}
								alt={furnish.furnishing}
								src={furnish.source}
							/>
						);
					})}
				</Box>
				<Typography
					variant="h5"
					sx={{
						fontWeight: "500",
						lineHeight: "3rem",
						margin: "30px 0px 10px 0px",
					}}
				>
					Amenities
				</Typography>
				<Box sx={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
					{[
						{ amenities: "Pool", source: Pool },
						{ amenities: "Elevator", source: Elevator },
						{ amenities: "CCTV Camera", source: CCTV },
						{ amenities: "Reception Bell", source: ReceptionBell },
						{ amenities: "Staff", source: Staff },
						{ amenities: "Fire Extinguisher", source: FireExtinguisher },
						{ amenities: "First Aid", source: FirstAidKit },
						{ amenities: "Gym", source: Gym },
						{ amenities: "Spa", source: Spa },
						{ amenities: "Park", source: Park },
						{ amenities: "Hotel Bell", source: HotelBell },
						{ amenities: "Room Service", source: RoomService },
					].map(function (amenity, index) {
						return (
							<Avatar
								onClick={handleAmenities}
								key={index}
								variant="square"
								sx={[
									{
										width: "100px",
										height: "100px",
										m: { md: "15px", xs: "4px" },
										"&:hover": { cursor: "pointer" },
									},
									formData.amenities.indexOf(amenity.amenities) >= 0
										? { backgroundColor: "black" }
										: {},
								]}
								alt={amenity.amenities}
								src={amenity.source}
							/>
						);
					})}
				</Box>
				<Typography
					variant="h5"
					sx={{
						fontWeight: "500",
						lineHeight: "3rem",
						margin: "30px 0px 10px 0px",
					}}
				>
					Property Details
				</Typography>
				<Box
					sx={{
						display: "flex",
						flexWrap: "wrap",
						width: "100%",
						flexDirection: { xs: "column", md: "row" },
						justifyContent: "space-around",
					}}
				>
					<Box>
						<FormControl sx={{ width: 200, margin: "1rem 1rem 0rem 0rem" }}>
							<FormLabel id="inputBuiltInlabel">Built in Area</FormLabel>
							<TextField
								onChange={handleFormChange}
								name="inputBuiltIn"
								aria-label="inputBuiltInlabel"
								variant="standard"
							/>
						</FormControl>
						<FormControl sx={{ width: 100, mt: "1rem" }}>
							<Select
								label="Unit"
								id="input-built-in-unit"
								value={builtInUnit}
								MenuProps={MenuProps}
								onChange={(event) => {
									updateBuiltInUnit(event);
								}}
							>
								<MenuItem value="Select Unit" disabled>
									<strong>Select Unit</strong>
								</MenuItem>
								{["Sq Feet", "Sq Meter", "Yard", "Bigha", "Hectare"].map(
									(unit, index) => {
										return (
											<MenuItem key={`${index}-${unit}`} value={unit}>
												{unit}
											</MenuItem>
										);
									}
								)}
							</Select>
						</FormControl>
					</Box>
					<Box>
						<FormControl sx={{ width: 200, margin: "1rem 1rem 0rem 0rem" }}>
							<FormLabel id="inputCarpet-label">Carpet Area</FormLabel>
							<TextField
								onChange={handleFormChange}
								name="inputCarpet"
								aria-label="inputCarpet-label"
								variant="standard"
							/>
						</FormControl>
						<FormControl sx={{ width: 100, mt: "1rem" }}>
							<Select
								label="Unit"
								id="input-built-in-unit"
								value={builtInUnit}
								MenuProps={MenuProps}
								onChange={(event) => {
									updateBuiltInUnit(event);
								}}
							>
								<MenuItem value="Select Unit" disabled>
									<strong>Select Unit</strong>
								</MenuItem>
								{["Sq Feet", "Sq Meter", "Yard", "Bigha", "Hectare"].map(
									(unit, index) => {
										return (
											<MenuItem key={`${index}-${unit}`} value={unit}>
												{unit}
											</MenuItem>
										);
									}
								)}
							</Select>
						</FormControl>
					</Box>
				</Box>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-around",
						flexWrap: "wrap",
					}}
				>
					<FormControl sx={{ width: "120px", mt: "2rem" }}>
						<FormLabel id="propertyBedroom-label">Bedroom</FormLabel>
						<TextField
							onChange={handleFormChange}
							aria-label="propertyBedroom-label"
							name="propertyBedroom"
							variant="standard"
						/>
					</FormControl>
					<FormControl sx={{ width: "120px", mt: "2rem" }}>
						<FormLabel id="propertyBathroom-label">Bathroom</FormLabel>
						<TextField
							onChange={handleFormChange}
							aria-label="propertyBathroom-label"
							name="propertyBathroom"
							variant="standard"
						/>
					</FormControl>
					<FormControl sx={{ width: "120px", mt: "2rem" }}>
						<FormLabel id="propertyStudy-label">Study</FormLabel>
						<TextField
							onChange={handleFormChange}
							aria-label="propertyStudy-label"
							name="propertyStudy"
							variant="standard"
						/>
					</FormControl>
					<FormControl sx={{ width: "120px", mt: "2rem" }}>
						<FormLabel id="propertyParking-label">Parking</FormLabel>
						<TextField
							onChange={handleFormChange}
							aria-label="propertyParking-label"
							name="propertyParking"
							variant="standard"
						/>
					</FormControl>
				</Box>
				<Typography
					variant="h5"
					sx={{
						fontWeight: "500",
						lineHeight: "3rem",
						margin: "30px 0px 10px 0px",
					}}
				>
					Pricing
				</Typography>
				<Box
					sx={{
						display: "flex",
						flexWrap: "wrap",
						width: "100%",
						flexDirection: { xs: "column", md: "row" },
						justifyContent: "space-around",
					}}
				>
					<Box>
						<FormControl sx={{ width: 200, margin: "1rem 1rem 0rem 0rem" }}>
							<FormLabel id="inputCost-label">Cost</FormLabel>
							<TextField
								onChange={handleFormChange}
								name="inputCost"
								aria-label="inputCost-label"
								variant="standard"
							/>
						</FormControl>
					</Box>
					<Box>
						<FormControl sx={{ width: 200, margin: "1rem 1rem 0rem 0rem" }}>
							<FormLabel id="inputMaintenence-label">Maintenence</FormLabel>
							<TextField
								onChange={handleFormChange}
								name="inputMaintenence"
								aria-label="inputMaintenence-label"
								variant="standard"
							/>
						</FormControl>
					</Box>
				</Box>
				<Box sx={{mt:"2rem"}}>
					<Button onClick={handleSubmit} variant = "contained">Submit</Button>
				</Box>
			</div>
		</Box>
	);
}

export default PostProperty;
