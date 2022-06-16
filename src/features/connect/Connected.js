import {
    Button,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import api from "../../utils/api";
import { updateDrawer } from "../flexi-abode-drawer/drawerSlice";
import { updateReceiver } from "./connectSlice";

function Connected() {
	const [pending, setPending] = useState([]);
	useEffect(() => {
		async function getPending() {
			try {
				const res = await api.get("/connect/approve");
				setPending([...res.data]);
			} catch (error) {
				console.log(error);
			}
		}
		getPending();
	}, []);
    const navigate = useNavigate()
	const dispatch = useDispatch();
    function handleClick(email) {
		dispatch(updateDrawer(6));
		dispatch(updateReceiver(email))
        navigate("/dashboard/message")
    }

	return (
		<TableContainer sx={{ width: "70rem" }} component={Paper}>
			<Table sx={{ width: "100%" }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>Email</TableCell>
						<TableCell>Message</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{pending.map((email, index) => (
						<TableRow
							key={"email-" + index}
							sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
						>   
							<TableCell>{email}</TableCell>
							<TableCell><Button onClick={()=>handleClick(email)}>Message</Button></TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

export default Connected;
