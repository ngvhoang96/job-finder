import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
	return (
		<div>
			<h2>Welcome to Job Finder</h2>
			<Link to="/search">Search for a job</Link>
			<Link to="/profile">View my profile</Link>
		</div>
	);
}
