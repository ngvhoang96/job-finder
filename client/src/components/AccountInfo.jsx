import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { clientSchema } from "../zodSchema";

const inputField = [
	{ key: "clientName", text: "Name", isNumber: false },
	{ key: "phoneNumber", text: "Phone Number", isNumber: true },
	{ key: "yearExperience", text: "Year Experience", isNumber: true },
];

export default function AccountInfo() {
	const [enableEdit, setEnableEdit] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: zodResolver(clientSchema) });

	const handleSaveInfo = (data) => {
		console.log(data);
		setEnableEdit(false);
	};

	return (
		<div>
			<form onSubmit={handleSubmit(handleSaveInfo)}>
				{inputField.map((field, key) => {
					return (
						<div key={key}>
							<label htmlFor={field.key}>{field.text}</label>
							<input
								id={field.key}
								readOnly={!enableEdit}
								{...register(String(field.key), {
									valueAsNumber: field.isNumber,
								})}
							/>
						</div>
					);
				})}
				<div>
					{Object.keys(errors).map((error, key) => {
						return <p key={key}>{errors[error]?.message}</p>;
					})}
				</div>
				{enableEdit && <button>Done</button>}
			</form>
			{!enableEdit && <button onClick={() => setEnableEdit(true)}>Edit</button>}
		</div>
	);
}
