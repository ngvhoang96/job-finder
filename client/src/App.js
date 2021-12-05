import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./components/Search";

function App() {
	return (
		<>
			<div>This is nav bar</div>
			<BrowserRouter>
				<Routes>
					<Route path="search" element={<Search />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
