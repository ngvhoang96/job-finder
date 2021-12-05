import React from "react";
import { useSelector } from "react-redux";

export default function NavigationBar() {
	const client = useSelector((state) => state.clientReducer);
	return (
		<div>
			<div>This is navigation bar</div>
			<div>
				<span>Hello {client.name}</span>
			</div>
		</div>
	);
}
