import React from "react";
import { useSelector } from "react-redux";

export default function NavigationBar() {
	const client = useSelector((state) => state.clientReducer);
	return (
		<div>
			<div>
				<a href="/">Home</a>
			</div>
			<div>
				<span>Hello {client.name}</span>
			</div>
		</div>
	);
}
