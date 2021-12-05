import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./components/Search";
import Profile from "./components/Profile";
import NavigationBar from "./components/utility/NavigationBar";

function App() {
	return (
		<>
			<NavigationBar />
			<BrowserRouter>
				<Routes>
					<Route path="search" element={<Search />} />
					<Route path="profile" element={<Profile />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
