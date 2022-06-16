import { useFormik } from "formik";
import * as Yup from "yup";
import {
	Box,
	Button,
	Checkbox,
	Container,
	FormHelperText,
	TextField,
	Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import api from "../../utils/api";
import { useDispatch } from "react-redux";
import { authUser } from "./authSlice";
import setAuthToken from "../../utils/setAuthToken";

const Register = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const formik = useFormik({
		initialValues: {
			email: "",
			firstName: "",
			lastName: "",
			password: "",
			policy: false,
		},
		validationSchema: Yup.object({
			email: Yup.string()
				.email("Must be a valid email")
				.max(255)
				.required("Email is required"),
			firstName: Yup.string().max(255).required("First name is required"),
			lastName: Yup.string().max(255).required("Last name is required"),
			password: Yup.string().max(255).required("Password is required"),
			policy: Yup.boolean().oneOf([true], "This field must be checked"),
		}),
		onSubmit: async () => {
			try {
				const res = await api.post("/users", formik.values);
				setAuthToken(res.data.token)
				dispatch(authUser(res.data.token))
				navigate("/dashboard/post-property")
			} catch (error) {
				if (error.response.data.errors.param === "email")
					formik.errors.email = error.response.data.errors.msg;
			}
		},
	});

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
				<Container maxWidth="sm">
					<Button component="a" startIcon={<ArrowBackIcon fontSize="small" />}>
						<Link to={"/dashboard/post-property"}>Dashboard</Link>
					</Button>

					<form onSubmit={formik.handleSubmit}>
						<Box sx={{ my: 3 }}>
							<Typography color="textPrimary" variant="h4">
								Create a new account
							</Typography>
							<Typography color="textSecondary" gutterBottom variant="body2">
								Use your email to create a new account
							</Typography>
						</Box>
						<TextField
							error={Boolean(
								formik.touched.firstName && formik.errors.firstName
							)}
							fullWidth
							helperText={formik.touched.firstName && formik.errors.firstName}
							label="First Name"
							margin="normal"
							name="firstName"
							onBlur={formik.handleBlur}
							onChange={formik.handleChange}
							value={formik.values.firstName}
							variant="outlined"
						/>
						<TextField
							error={Boolean(formik.touched.lastName && formik.errors.lastName)}
							fullWidth
							helperText={formik.touched.lastName && formik.errors.lastName}
							label="Last Name"
							margin="normal"
							name="lastName"
							onBlur={formik.handleBlur}
							onChange={formik.handleChange}
							value={formik.values.lastName}
							variant="outlined"
						/>
						<TextField
							error={Boolean(formik.touched.email && formik.errors.email)}
							fullWidth
							helperText={formik.touched.email && formik.errors.email}
							label="Email Address"
							margin="normal"
							name="email"
							onBlur={formik.handleBlur}
							onChange={formik.handleChange}
							type="email"
							value={formik.values.email}
							variant="outlined"
						/>
						<TextField
							error={Boolean(formik.touched.password && formik.errors.password)}
							fullWidth
							helperText={formik.touched.password && formik.errors.password}
							label="Password"
							margin="normal"
							name="password"
							onBlur={formik.handleBlur}
							onChange={formik.handleChange}
							type="password"
							value={formik.values.password}
							variant="outlined"
						/>
						<Box
							sx={{
								alignItems: "center",
								display: "flex",
								ml: -1,
							}}
						>
							<Checkbox
								checked={formik.values.policy}
								name="policy"
								onChange={formik.handleChange}
							/>
							<Typography color="textSecondary" variant="body2">
								I have read the{" "}
								<Typography
									color="primary"
									underline="always"
									variant="subtitle2"
								>
									Terms and Conditions
								</Typography>
							</Typography>
						</Box>
						{Boolean(formik.touched.policy && formik.errors.policy) && (
							<FormHelperText error>{formik.errors.policy}</FormHelperText>
						)}
						<Box sx={{ py: 2 }}>
							<Button
								color="primary"
								disabled={formik.isSubmitting}
								fullWidth
								size="large"
								type="submit"
								variant="contained"
							>
								Sign Up Now
							</Button>
						</Box>
						<Typography color="textSecondary" variant="body2">
							Have an account?{" "}
							<Link to={"/auth/login"}>
								<Typography variant="subtitle2" underline="hover">
									Sign In
								</Typography>
							</Link>
						</Typography>
					</form>
				</Container>
			</Box>
		</>
	);
};

export default Register;
