import React from "react";
import { useSelector } from "react-redux";
import AccountInfo from "./AccountInfo";

export default function Profile() {
	const client = useSelector((state) => state.clientReducer);

	return (
		<div>
			<h2>Hi {client.name}</h2>
			<AccountInfo />
		</div>
	);
}
