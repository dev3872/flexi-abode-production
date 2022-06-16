import { Box, Button, FormControl, FormLabel, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import api from "../../utils/api";
function Message() {
	const [message, setMessage] = useState("");
	const [temp, setTemp] = useState(0);
	const receiver = useSelector((state) => state.connect.receiver);
	const [messages, setMessages] = useState([]);
	const [messageList, setMessageList] = useState([]);
	useEffect(() => {
		async function getAllMessages(params) {
			try {
				const res = await api.post("/connect/getMessage", {
					receiver: receiver,
				});
				console.log(res.data);
				setMessages([...res.data]);
				console.log(messages);
			} catch (error) {
				console.log(error);
			}
		}
		getAllMessages();
	}, [temp]);

	function handleFormChange(event, value) {
		setMessage(event.target.value);
	}
	async function sendMessage() {
		try {
			await api.post("/connect/send", {
				message: message,
				receiver: receiver,
			});
			setTemp((temp) => temp + 1);
		} catch (error) {
			console.log(error);
		}
	}
	return (
		<Box sx={{ position: "relative", height: "50rem" }}>
			<Box>
				{messages.map((msg, index) => {
					return (
						<div key={"message-" + index}>
							<p>{msg.text}</p>
						</div>
					);
				})}
			</Box>
			<Box sx={{ position: "absolute", bottom: "0px" }}>
				<FormControl sx={{ width: "400px" }}>
					<FormLabel id="message-label">Message</FormLabel>
					<TextField
						onChange={handleFormChange}
						value={message}
						aria-label="message-label"
						name="message"
						variant="standard"
					/>
				</FormControl>
				<FormControl sx={{ width: "400px", mt: "2rem" }}>
					<Button onClick={sendMessage} variant="outlined">
						Submit
					</Button>
				</FormControl>
			</Box>
		</Box>
	);
}

export default Message;
