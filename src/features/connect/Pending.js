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
import api from "../../utils/api";

function Pending() {
	const [pending, setPending] = useState([]);
	useEffect(() => {
		async function getPending() {
			try {
				const res = await api.get("/connect/pending");
				setPending([...res.data]);
			} catch (error) {
				console.log(error);
			}
		}
		getPending();
	}, []);
    async function handleClick(email) {
        try {
            await api.post("/connect/approveRequest",{email:email})
        } catch (error) {
            console.log(error)
        }
    }

	return (
		<TableContainer sx={{ width: "70rem" }} component={Paper}>
			<Table sx={{ width: "100%" }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>Email</TableCell>
						<TableCell>Approve</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{pending.map((email, index) => (
						<TableRow
							key={"email-" + index}
							sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
						>   
							<TableCell>{email}</TableCell>
							<TableCell><Button onClick={()=>handleClick(email)}>Approve</Button></TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

export default Pending;
