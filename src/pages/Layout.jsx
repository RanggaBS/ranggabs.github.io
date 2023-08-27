import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";

const Layout = () => {
	return (
		<>
			<Navbar />
			<main className="flex flex-grow h-full">
				<Outlet />
			</main>
		</>
	);
};

export default Layout;
