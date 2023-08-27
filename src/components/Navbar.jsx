import { useState } from "react";

import { Link } from "react-router-dom";

import rbsIdLogo from "../assets/images/RBS-ID.jpg";

const Navbar = () => {
	const [active, setActive] = useState(false);

	const toggleActive = () => {
		// setActive(!active);
		setActive((prevValue) => !active);
	};

	const currentLink = (event) => {
		document.querySelectorAll(".menu-link").forEach((element, index) => {
			element.classList.remove("menu-link--current");
		});
		event.target.classList.add("menu-link--current");
	};

	return (
		<nav className="sticky top-0 flex items-center justify-between w-full px-8 pt-4 navbar">
			<a href="/" className="uppercase rounded-full logo">
				<img
					src={rbsIdLogo}
					alt="RBS ID picture"
					className="w-12 rounded-full md:w-16"
				/>
			</a>
			<label htmlFor="hamburger-menu" className="w-6 h-6 xs:hidden">
				<input
					type="checkbox"
					name="hamburger-menu"
					id="hamburger-menu"
					onChange={toggleActive}
					className="w-full h-full opacity-0 hamburger-input"
				/>

				{/* Hamburger menu icon */}
				<div className="absolute translate-y-2 top-5 hamburger-icon z-[1]">
					<span className="line line--first-line"></span>
					<span className="line line--second-line"></span>
					<span className="line line--third-line"></span>
				</div>
			</label>
			<ul
				className={`menu text-2xl flex flex-col items-center gap-y-4 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full w-full min-h-full transition
        xs:w-auto xs:text-base xs:static xs:translate-x-0 xs:translate-y-0 xs:flex-row xs:gap-x-8 xs:transition-none
        ${active ? "active" : ""}`}
			>
				<li className="first:mt-4 xs:first:m-0">
					<Link
						onClick={currentLink}
						to="/"
						className="menu-link menu-link--current"
					>
						Home
					</Link>
				</li>
				<li>
					<Link
						onClick={currentLink}
						to="/about"
						className="menu-link"
					>
						About
					</Link>
				</li>
				<li>
					<Link
						onClick={currentLink}
						to="/projects"
						className="menu-link"
					>
						Projects
					</Link>
				</li>
				<li className="last:mb-4 xs:last:m-0">
					<Link
						onClick={currentLink}
						to="/contact"
						className="menu-link"
					>
						Contact
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
