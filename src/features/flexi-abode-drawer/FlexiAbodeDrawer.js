import {
	AppBar,
	Box,
	CssBaseline,
	IconButton,
	Toolbar,
	Typography,
	Drawer,
	Menu,
	MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import FlexiDrawer from "./Drawer";
import { useSelector, useDispatch } from "react-redux";
import { updateDrawer } from "./drawerSlice.js";
import {logoutUser} from "../auth/authSlice"
import { Route, Routes } from "react-router-dom";
import PostProperty from "../post-property/PostProperty";
import PropertySubmitted from "../post-property/PropertySubmitted";
import MyProperty from "../post-property/MyProperty";
import PropertyNearMe from "../post-property/PropertyNearMe";
import EMICalculator from "../post-property/EMICalculator";
import Pending from "../connect/Pending";
import Connected from "../connect/Connected";
import Message from "../connect/Message";
import { AccountCircle } from "@mui/icons-material";
import Faq from "../help/Faq";

const drawerWidth = 300;

function FlexiAbodeDrawer() {
	const [mobileOpen, setMobileOpen] = useState(false);
	const [anchorEl, setAnchorEl] = React.useState(null);
	const drawerState = useSelector((state) => state.drawer.drawer);
	const dispatch = useDispatch();
	function handleDrawerToggle() {
		setMobileOpen(!mobileOpen);
	}
	function updateDrawerState(value) {
		dispatch(updateDrawer(value || 0));
	}
	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	const handleLogout = ()=>{
		setAnchorEl(null);
		dispatch(logoutUser())
	}
	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar
				position="fixed"
				sx={{
					width: { sm: `calc(100% - ${drawerWidth}px)` },
					ml: { sm: `${drawerWidth}px` },
				}}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: "none" } }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap component="div">
						Dashboard
					</Typography>
					<div style={{ marginLeft: "auto" }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleMenu}
							color="inherit"
						>
							<AccountCircle />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorEl}
							anchorOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							open={Boolean(anchorEl)}
							onClose={handleClose}
						>
							<MenuItem onClick={handleLogout}>Logout</MenuItem>
						</Menu>
					</div>
				</Toolbar>
			</AppBar>
			<Box
				component="nav"
				sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
				aria-label="mailbox folders"
			>
				<Drawer
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true,
					}}
					sx={{
						display: { xs: "block", sm: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							backgroundColor: "#111827",
							width: drawerWidth,
						},
					}}
				>
					<FlexiDrawer
						updateDrawerState={updateDrawerState}
						drawerState={drawerState}
					/>
				</Drawer>
				<Drawer
					variant="permanent"
					sx={{
						display: { xs: "none", sm: "block" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							backgroundColor: "#111827",
							width: drawerWidth,
						},
					}}
					open
				>
					<FlexiDrawer
						updateDrawerState={updateDrawerState}
						drawerState={drawerState}
					/>
				</Drawer>
			</Box>
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					p: 3,
					width: { sm: `calc(100% - ${drawerWidth}px)` },
				}}
			>
				<Toolbar />
				<Routes>
					<Route path="/myProperty" element={<MyProperty />} />
					<Route path="/propertySubmitted" element={<PropertySubmitted />} />
					<Route path="/post-property" element={<PostProperty />} />
					<Route path="/propertyNearMe" element={<PropertyNearMe />} />
					<Route path="/emiCalculator" element={<EMICalculator />} />
					<Route path="/pending" element={<Pending />} />
					<Route path="/connected" element={<Connected />} />
					<Route path="/message" element={<Message />} />
					<Route path="/faq" element={<Faq/>}/>
				</Routes>
			</Box>
		</Box>
	);
}

export default FlexiAbodeDrawer;
