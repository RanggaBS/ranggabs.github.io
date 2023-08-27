import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
// import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

import "./styles/App.css";

function App() {
	return (
		<div className="flex flex-col min-h-screen overflow-x-hidden app">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index={true} element={<Home />} />
						<Route path="about" element={<About />} />
						<Route path="projects" element={<Projects />} />
						<Route path="contact" element={<Contact />} />
						<Route path="*" element={<NoPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
