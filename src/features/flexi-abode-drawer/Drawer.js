import {
	Avatar,
	Box,
	Divider,
	List,
	ListItem,
	ListItemAvatar,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import logo from "./logo.png";
import { Selector as SelectorIcon } from "../../icons/selector";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function FlexiDrawer(props) {
	const { updateDrawerState, drawerState } = props;
	const navigate = useNavigate();
	useEffect(() => {
		if (drawerState === 0) navigate("/dashboard/propertyNearMe");
		else if (drawerState === 3) navigate("/dashboard/emiCalculator");
		else if (drawerState === 4) navigate("/dashboard/post-property");
		else if (drawerState === 5) navigate("/dashboard/myProperty");
		else if (drawerState === 7) navigate("/dashboard/connected");
		else if (drawerState === 8) navigate("/dashboard/pending");
		else if(drawerState === 10) navigate("/dashboard/faq")
	}, [drawerState, navigate]);

	const propertyList = 4;
	const connectionList = 6;
	const helpList = 9;
	return (
		<div>
			<List
				sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
			>
				<div style={{ display: "flex", justifyContent: "space-between" }}>
					<ListItem sx={{ width: "15%" }}>
						<ListItemButton>
							<ListItemAvatar>
								<Avatar alt="logo" src={logo} />
							</ListItemAvatar>
						</ListItemButton>
					</ListItem>
					<Box sx={{ px: 2, mx: 2, width: "85%" }}>
						<Box
							sx={{
								alignItems: "center",
								backgroundColor: "rgba(255, 255, 255, 0.04)",
								color: "white",
								cursor: "pointer",
								display: "flex",
								justifyContent: "space-between",
								px: 3,
								py: "11px",
								borderRadius: 1,
							}}
						>
							<div>
								<Typography color="inherit" variant="subtitle1">
									Lucknow
								</Typography>
								<Typography color="neutral.400" variant="body2">
									Location: Enabled
								</Typography>
							</div>
							<SelectorIcon
								sx={{
									color: "neutral.500",
									width: 14,
									height: 14,
								}}
							/>
						</Box>
					</Box>
				</div>
			</List>
			<Divider
				sx={{
					height: "5px",
					width: "100%",
					color: "#ffffff",
					borderColor: "#2D3748",
				}}
			/>
			<List
				sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
			>
				{[
					"Properties Near me",
					"Popular Choices",
					"FlexiAbode Approved",
					"Calculate EMI",
				].map((text, index) => (
					<ListItem
						sx={[
							{
								borderRadius: "0.6rem",
								width: "90%",
								margin: "3px 0px",
								"&:hover": { backgroundColor: "#242A38" },
							},
							drawerState === index && { bgcolor: "#242A38" },
						]}
						key={text}
						disablePadding
						onClick={() => updateDrawerState(index)}
					>
						<ListItemButton>
							<ListItemIcon
								sx={[
									drawerState === index
										? { color: "#10B981" }
										: { color: "#9DA3AE" },
								]}
							>
								{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
							</ListItemIcon>
							<ListItemText
								sx={[
									drawerState === index
										? { color: "#10B981" }
										: { color: "#9DA3AE" },
								]}
								primary={text}
							/>
						</ListItemButton>
					</ListItem>
				))}
			</List>

			<Divider
				sx={{
					height: "5px",
					width: "100%",
					color: "#ffffff",
					borderColor: "#2D3748",
				}}
			/>
			<List
				sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
			>
				{["Post Property", "My Properties"].map((text, index) => (
					<ListItem
						sx={[
							{
								borderRadius: "0.6rem",
								width: "90%",
								margin: "3px 0px",
								"&:hover": { backgroundColor: "#242A38" },
							},
							drawerState === index + propertyList && { bgcolor: "#242A38" },
						]}
						key={text}
						disablePadding
						onClick={() => updateDrawerState(index + propertyList)}
					>
						<ListItemButton>
							<ListItemIcon
								sx={[
									drawerState === index + propertyList
										? { color: "#10B981" }
										: { color: "#9DA3AE" },
								]}
							>
								{index + (propertyList % 2) === 0 ? (
									<InboxIcon />
								) : (
									<MailIcon />
								)}
							</ListItemIcon>
							<ListItemText
								sx={[
									drawerState === index + propertyList
										? { color: "#10B981" }
										: { color: "#9DA3AE" },
								]}
								primary={text}
							/>
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<Divider
				sx={{
					height: "5px",
					width: "100%",
					color: "#ffffff",
					borderColor: "#2D3748",
				}}
			/>
			<List
				sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
			>
				{["Messages", "Connections", "Pending Approval"].map((text, index) => (
					<ListItem
						sx={[
							{
								borderRadius: "0.6rem",
								width: "90%",
								margin: "3px 0px",
								"&:hover": { backgroundColor: "#242A38" },
							},
							drawerState === index + connectionList && { bgcolor: "#242A38" },
						]}
						key={text}
						disablePadding
						onClick={() => updateDrawerState(index + connectionList)}
					>
						<ListItemButton>
							<ListItemIcon
								sx={[
									drawerState === index + connectionList
										? { color: "#10B981" }
										: { color: "#9DA3AE" },
								]}
							>
								{index + (connectionList % 2) === 0 ? (
									<InboxIcon />
								) : (
									<MailIcon />
								)}
							</ListItemIcon>
							<ListItemText
								sx={[
									drawerState === index + connectionList
										? { color: "#10B981" }
										: { color: "#9DA3AE" },
								]}
								primary={text}
							/>
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<Divider
				sx={{
					height: "5px",
					width: "100%",
					color: "#ffffff",
					borderColor: "#2D3748",
				}}
			/>
			<List
				sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
			>
				{["Help Center", "F.A.Q"].map((text, index) => (
					<ListItem
						sx={[
							{
								borderRadius: "0.6rem",
								width: "90%",
								margin: "3px 0px",
								"&:hover": { backgroundColor: "#242A38" },
							},
							drawerState === index + helpList && { bgcolor: "#242A38" },
						]}
						key={text}
						disablePadding
						onClick={() => updateDrawerState(index + helpList)}
					>
						<ListItemButton>
							<ListItemIcon
								sx={[
									drawerState === index + helpList
										? { color: "#10B981" }
										: { color: "#9DA3AE" },
								]}
							>
								{index + (helpList % 2) === 0 ? <InboxIcon /> : <MailIcon />}
							</ListItemIcon>
							<ListItemText
								sx={[
									drawerState === index + helpList
										? { color: "#10B981" }
										: { color: "#9DA3AE" },
								]}
								primary={text}
							/>
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</div>
	);
}

export default FlexiDrawer;
