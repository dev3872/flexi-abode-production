import { BrowserRouter, Route, Routes } from "react-router-dom";
import FlexiAbodeDrawer from "./features/flexi-abode-drawer/FlexiAbodeDrawer";
import Login from "./features/auth/Login";
import Register from "./features/auth/Register";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import setAuthToken from "./utils/setAuthToken";
import api from "./utils/api";
import { authUser, auth_error, loaded, logoutUser } from "./features/auth/authSlice";
import NotFound from "./features/_404/NotFound";
function App() {
	const dispatch = useDispatch()
	const authState = useSelector((state) => state.auth.isAuthenticated);
	useEffect(() => {
		// check for token in LS
		if (localStorage.token) {
			setAuthToken(localStorage.token);
			dispatch(authUser(localStorage.token))
			loadUser();
		}
		// log user out from all tabs if they log out in one tab
		window.addEventListener("storage", () => {
			if (!localStorage.token) dispatch(logoutUser());
		});
	}, []);
	const loadUser = async () => {
		try {
			const res = await api.get("/auth");

			dispatch(loaded(res.data));
		} catch (err) {
			dispatch(auth_error());
		}
	};
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/*" element={<NotFound />} />
				<Route
					path="/dashboard/*"
					element={authState === false ? <Login /> : <FlexiAbodeDrawer />}
				/>
				<Route
					path="/auth/register"
					element={authState === false ? <Register /> : <FlexiAbodeDrawer />}
				/>
				<Route
					path="/auth/login"
					element={authState === false ? <Login /> : <FlexiAbodeDrawer />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
